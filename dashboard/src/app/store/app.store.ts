import { Store, StoreConfig } from "@datorama/akita";
import { InfoModel } from "../api/info/models/info.model";

export interface AppState {
    serverState: InfoModel;
}

export function createInitialState(): AppState {
    return {
        serverState: null
    };
}

@StoreConfig({ name: "app" })
export class AppStore extends Store<AppState> {
    constructor() {
        super(createInitialState());
    }
}
