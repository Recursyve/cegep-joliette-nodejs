import { Routes } from "@angular/router";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { DASHBOARD_ROUTES } from "./features/dashboard/dashboard.routes";

export const ROUTES: Routes = [
    // Main redirect
    { path: "", redirectTo: "dashboard", pathMatch: "full" },

    // App components
    {
        path: "dashboard",
        component: DashboardComponent,
        children: DASHBOARD_ROUTES
    }
];
