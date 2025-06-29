import { House, Plus, Settings, TicketPercent, Settings2, Pen  } from 'lucide-react';

const childIconSize = 16
const childIconColor = "gray"

export const menuItems = [
    {
        label: "dashboard",
        icon: <House />,
        link: "/dashboard",
    },
    {
        label: "settings",
        icon: <Settings />,
        link: "/settings",
        children: [
            {
                label: "storeInformation",
                icon: <Settings2 size={childIconSize} color={childIconColor} />,
                link: "/settings/profile",
            },
        ]
    },
    {
        label: "coupons",
        icon: <TicketPercent  />,
        link: "/coupons",
        children: [
            {
                label: "create",
                icon: <Pen size={childIconSize} color={childIconColor} />,
                link: "/coupons/create",
            },
        ]
    },
];