import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ToolbarComponent } from "./toolbar.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FALLBACK, GravatarModule } from "ngx-gravatar";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        TranslateModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        GravatarModule.forRoot({ fallback: FALLBACK.mm }),
        FlexLayoutModule,
        CommonModule
    ],
    exports: [ToolbarComponent],
    declarations: [ToolbarComponent]
})
export class ToolbarModule {
}
