import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NiceNavigationItem, NiceSidebarService } from '@recursyve/nice-ui-kit';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: "navbar",
    templateUrl: "navbar.template.html",
    styleUrls: ["navbar.style.scss"],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
    private unsubscribeAll: Subject<void> = new Subject();

    constructor(
        private sidebarService: NiceSidebarService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntil(this.unsubscribeAll)
            )
            .subscribe(() => {
                if (this.sidebarService.getSidebar("navbar")) {
                    this.sidebarService.getSidebar("navbar").close();
                }
            });
    }

    public toggleSidebarFolded(): void {
        this.sidebarService.getSidebar("navbar").toggleFold();
    }

    public toggleSidebarOpened(): void {
        this.sidebarService.getSidebar("navbar").toggleOpen();
    }
}
