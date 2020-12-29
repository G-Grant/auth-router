import { RouteConfig } from "react-router-config";
import A from "../pages/A";
import B from "../pages/B";
import C from "../pages/C";
import D from "../pages/D";

const routes: RouteConfig[] = [
    {
        path: "/a",
        component: A,
        exact: true
    },
    {
        path: "/b",
        component: B,
        exact: true,
        role: ["admin"],
    },
    {
        path: "/c",
        component: C,
        exact: true,
    },
    {
        path: "/d",
        component: D,
        exact: true,
    },
];

export default routes;
