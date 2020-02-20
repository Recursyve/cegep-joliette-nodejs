import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { NiceLoadingSpinnerModule } from "@recursyve/nice-ui-kit";
import { CreateComponent } from "./create/create.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        NiceLoadingSpinnerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatListModule
    ],
    exports: [],
    entryComponents: [CreateComponent],
    declarations: [HomeComponent, CreateComponent],
    providers: []
})
export class HomeModule {
}
