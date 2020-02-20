import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { NiceToastService } from "@recursyve/nice-ui-kit";
import { environment } from "../../environments/environment";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) {}

    public handleError(error: Error | HttpErrorResponse) {
        const notificationService = this.injector.get(NiceToastService);

        let message = error.message;
        if (environment.production) {
            message = "handler.prod_message";
        }

        notificationService.error(message);

        throw error;
    }
}
