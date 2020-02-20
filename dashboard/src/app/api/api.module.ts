import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { InfoApi } from "./info/info.api";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { AuthInterceptor } from "./interceptors/auth.interceptor";

@NgModule({
    providers: [
        InfoApi,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
})
export class ApiModule {
}
