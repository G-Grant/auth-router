import A from "../pages/A";
import D from "../pages/D";

const adminRoutes = [{
    path: '/a',
    component: A,
    exact: true,
    role: ['admin']
}, {
    path: '/d',
    component: D,
    exact: true,
    role: ['admin']
}]

export default adminRoutes