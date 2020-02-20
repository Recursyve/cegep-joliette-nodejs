import { HashLocationStrategy, LOCATION_INITIALIZED, LocationStrategy } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { APP_INITIALIZER, ErrorHandler, Injector, NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatNativeDateModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NiceToastModule } from "@recursyve/nice-ui-kit";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { AkitaNgRouterStoreModule } from "@datorama/akita-ng-router-store";
import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";
import { DashboardModule } from "./features/dashboard/dashboard.module";
import { ApiModule } from "./api/api.module";
import { AppStore } from "./store/app.store";
import { AppQuery } from "./store/app.query";
import { GlobalErrorHandler } from "./handlers/global-error.handler";
import { environment } from "../environments/environment";

export function appInitializerFactory(translate: TranslateService, injector: Injector) {
    return () =>
        new Promise<any>((resolve: any) => {
            const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
            locationInitialized.then(async () => {
                const lang = localStorage.getItem("lang") || translate.getBrowserLang();
                translate.setDefaultLang(lang);
                try {
                    await translate.use(lang).toPromise();
                } finally {
                    resolve();
                }
            });
        });
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES),

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),

        MatNativeDateModule,
        MatButtonModule,
        MatIconModule,
        ApiModule,
        DashboardModule,
        NiceToastModule,
        environment.production ? [] : AkitaNgDevtools.forRoot(),
        AkitaNgRouterStoreModule.forRoot()
    ],
    providers: [
        AppStore,
        AppQuery,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [TranslateService, Injector],
            multi: true
        },
        { provide: ErrorHandler, useClass: GlobalErrorHandler }
    ],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
