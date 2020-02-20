import { Injectable } from "@angular/core";
import { AppStore } from "./app.store";
import { ApiService } from "../api/api.service";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { AppQuery } from "./app.query";

@Injectable({
    providedIn: "root"
})
export class AppService {
    constructor(
        private appStore: AppStore,
        private appQuery: AppQuery,
        private api: ApiService
    ) {
    }

    public loadServerState() {
        this.appStore.setLoading(true);
        this.api.info.getInfo()
            .pipe(
                tap((serverState) => {
                    this.appStore.update({ serverState });
                    this.appStore.setLoading(false);
                }),
                catchError((e) => {
                    this.appStore.setError(e);
                    this.appStore.setLoading(false);
                    return of(e);
                })
            ).subscribe();
        this.appStore.setLoading(false);
    }
}
