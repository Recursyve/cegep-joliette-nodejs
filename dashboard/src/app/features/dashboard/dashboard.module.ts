import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from './dashboard.component';
import { NiceSidebarModule } from '@recursyve/nice-ui-kit';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TranslateModule,
        ToolbarModule,
        FlexLayoutModule,
        NiceSidebarModule,
        NavbarModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
