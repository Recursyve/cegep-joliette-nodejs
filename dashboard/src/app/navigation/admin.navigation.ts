import { NiceNavigation } from '@recursyve/nice-ui-kit';

export const adminNavigation: NiceNavigation[] = [
    {
        id: "home",
        translate: "navigation.home",
        type: "group",
        children: [
            {
                id: "dashboard",
                translate: "navigation.dashboard",
                type: "item",
                iconType: "fontawesome",
                icon: "fa fa-cocktail",
                url: "/dashboard/home"
            }
        ]
    }
];
