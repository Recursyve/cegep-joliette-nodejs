import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InfoModel } from "./models/info.model";
import { BaseApi } from "../base.api";

@Injectable()
export class InfoApi extends BaseApi {
    constructor(private http: HttpClient) {
        super("");
    }

    public getInfo(): Observable<InfoModel> {
        return this.http.get<InfoModel>(this.url());
    }
}
