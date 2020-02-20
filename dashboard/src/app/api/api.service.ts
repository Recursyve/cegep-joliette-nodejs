import { Injectable } from "@angular/core";
import { InfoApi } from "./info/info.api";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    constructor(
        private infoApi: InfoApi
    ) {
    }

    public get info(): InfoApi {
        return this.infoApi;
    }
}
