import { Injectable } from "@angular/core";
import { adminNavigation } from "./admin.navigation";
import { NiceNavigationService } from '@recursyve/nice-ui-kit';

@Injectable({
    providedIn: "root"
})
export class NavigationService {
    constructor(private niceNavigationService: NiceNavigationService) {}

    public async init() {
        this.niceNavigationService.register("admin", adminNavigation);
        this.niceNavigationService.setCurrentNavigation("admin");
    }
}
