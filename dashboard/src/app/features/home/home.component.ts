import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { CreateComponent } from "./create/create.component";

export interface LocationModel {
    id: number;
    name: string;
    address: string;
    pictureUrl: string;
}

@Component({
    selector: "home",
    templateUrl: "home.template.html",
    styleUrls: ["./home.style.scss"],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    private static URL = "http://localhost:3000";

    public loading = false;
    public locations: LocationModel[] = [
        {
            id: 0,
            name: "Recursyve Solutions inc.",
            address: "1040 rue Notre-Dame, Lavaltrie",
            pictureUrl: "https://recursyve.io/assets/images/technocentre.jpg"
        },
        {
            id: 1,
            name: "Brasserie Artisanale Albion",
            address: "Boulvevard Manseau, Joliette",
            pictureUrl: "http://www.brasseriealbion.com/wp-content/uploads/2015/12/12310552_780737182048589_3532721215814652423_n.jpg"
        }
    ];

    constructor(
        private http: HttpClient,
        private matDialog: MatDialog
    ) { }

    public async ngOnInit(): Promise<void> {
        this.reload();
    }

    private async reload(): Promise<void> {
        try {
            this.loading = true;
            this.locations = await this.http.get<LocationModel[]>(`${HomeComponent.URL}/locations`).toPromise();
        } catch (e) {
        } finally {
            this.loading = false;
        }
    }

    public async clickDelete(location: LocationModel) {
        await this.http.delete(`${HomeComponent.URL}/locations/${location.id}`).toPromise();
        await this.reload();
    }

    public async clickEdit(location: LocationModel) {
        this.matDialog.open(CreateComponent, { data: location }).afterClosed().subscribe(async newLocation => {
            if (newLocation) {
                await this.http.put(`${HomeComponent.URL}/locations/${location.id}`, newLocation).toPromise();
                await this.reload();
            }
        });
    }

    public async clickCreate() {
        this.matDialog.open(CreateComponent).afterClosed().subscribe(async newLocation => {
            if (newLocation) {
                await this.http.post(`${HomeComponent.URL}/locations`, newLocation).toPromise();
                await this.reload();
            }
        });
    }
}
