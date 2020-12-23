import B from "../pages/B";
import C from "../pages/C";

const publicRoutes = [{
    path: '/b',
    component: B,
    exact: true
}, {
    path: '/c',
    component: C,
    exact: true
}]

export default publicRoutes