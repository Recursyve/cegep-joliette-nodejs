import { Routes } from "@angular/router";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: "home",
        loadChildren: () => import("../home/home.module").then(m => m.HomeModule)
    }
];
