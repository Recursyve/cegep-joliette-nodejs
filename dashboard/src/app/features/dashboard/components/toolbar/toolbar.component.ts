import { Component, ViewEncapsulation } from "@angular/core";
import { NiceSidebarService } from '@recursyve/nice-ui-kit';


@Component({
    selector: "toolbar",
    templateUrl: "toolbar.template.html",
    styleUrls: ["./toolbar.style.scss"],
    encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent {
    public currentUser = {
        email: "brandon@recursyve.io"
    };

    constructor(
        private fuseSidebarService: NiceSidebarService
    ) {}

    public toggleSidebarOpen(key: string) {
        this.fuseSidebarService.getSidebar(key).toggleOpen();
    }

    public async logout() {}
}
