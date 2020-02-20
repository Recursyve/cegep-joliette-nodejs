import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    public intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.headers.get("SeedProject") === "route/public") {
            req.headers.delete("SeedProject");
            return next.handle(req);
        }

        /**
         *  TODO: Transform request to add auth header
         */
        return next.handle(req);
    }
}
