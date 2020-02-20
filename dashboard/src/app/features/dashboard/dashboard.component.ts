import { Component, ElementRef, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-dashboard",
    templateUrl: "dashboard.template.html",
    styleUrls: ["dashboard.style.scss"],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
    constructor(
        private router: Router,
        private elementRef: ElementRef
    ) {
    }

    public ngOnInit() {
        this.router.events.subscribe(_ => {
            this.elementRef.nativeElement.scrollIntoView();
        });
    }
}
