import { environment } from "../../environments/environment";

export class BaseApi {
    private readonly apiUrl = environment.apiUrl;
    private readonly path: string;

    constructor(path: string) {
        this.path = path;
    }

    protected url(route = ""): string {
        if (route === "" && this.path === "") {
            return this.apiUrl;
        }
        return `${this.apiUrl}/${this.path}/${route}`;
    }
}
