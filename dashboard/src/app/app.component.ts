import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import localeEn from "@angular/common/locales/en";
import { NavigationService } from "./navigation/navigation.service";
import { AppService } from "./store/app.service";

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.style.scss"]
})
export class AppComponent implements OnInit {

    constructor(
        private appService: AppService,
        private navigationService: NavigationService,
        private translateService: TranslateService,
    ) {}

    public async ngOnInit() {
        await this.appService.loadServerState();
        await this.navigationService.init();

        const lang = localStorage.getItem("lang") || this.translateService.getBrowserLang();
        localStorage.setItem("lang", lang);
        this.updateLang(lang);
    }

    private updateLang(lang: string) {
        this.translateService.setDefaultLang(lang);
        registerLocaleData(localeFr);
        registerLocaleData(localeEn);
    }
}
