import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { LocationModel } from "../home.component";

@Component({
    selector: "create",
    templateUrl: "create.template.html",
    styleUrls: ["./create.style.scss"],
    encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
    public newLocation: LocationModel = {} as LocationModel;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: LocationModel,
        private matDialogRef: MatDialogRef<CreateComponent, LocationModel>
    ) { }

    public ngOnInit(): void {
        if (this.data) {
            this.newLocation = this.data;
        }
    }

    public clickCreate() {
        this.matDialogRef.close(this.newLocation);
    }
}
