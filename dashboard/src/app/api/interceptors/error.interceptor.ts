import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { NiceToastService } from "@recursyve/nice-ui-kit";
import { fromPromise } from "rxjs/internal-compatibility";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private toastService: NiceToastService) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler) {
        return fromPromise(this.handleError(req, next));
    }

    private async handleError(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
        try {
            return await next.handle(request.clone()).toPromise();
        } catch (e) {
            const err = this.normalizeError(e, request.url);

            if (err) {
                throw err;
            }
        }
    }

    private normalizeError(error: any, api: string): any {
        if (error instanceof Error) {
            return error;
        }

        if (error instanceof HttpErrorResponse) {
            return this.handleHttpError(error, api);
        }
    }

    private handleHttpError(error: HttpErrorResponse, api: string) {
        if (error.status === 401) {
            this.router.navigate(["/login"]);
            return null;
        } else if (error.status === 403) {
            this.router.navigate(["/dashboard/forbidden"]);
            this.toastService.warning("", "403");
            return null;
        }

        if (error.status === 404) {
            return error;
        }

        return error;
    }
}
