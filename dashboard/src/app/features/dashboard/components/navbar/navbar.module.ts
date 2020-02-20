import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NiceLoadingSpinnerModule, NiceNavigationModule } from '@recursyve/nice-ui-kit';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        RouterModule,
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        NiceLoadingSpinnerModule,
        NiceNavigationModule
    ],
    exports: [NavbarComponent],
    declarations: [NavbarComponent]
})
export class NavbarModule {
}
