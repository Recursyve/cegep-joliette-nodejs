import { Query } from "@datorama/akita";
import { AppState, AppStore } from "./app.store";
import { Observable } from "rxjs";
import { InfoModel } from "../api/info/models/info.model";
import { Injectable } from "@angular/core";

@Injectable()
export class AppQuery extends Query<AppState> {

    constructor(protected store: AppStore) {
        super(store);
    }

    public selectServerState(): Observable<InfoModel> {
        return this.select(state => state.serverState);
    }
}
