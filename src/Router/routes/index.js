const { lazy } = require("react");

const Routes = [
    {
        path: "/",
        component: lazy(() => import("../../pages/SignIn")),
        exact: true,
    },
    {
        path: "/login",
        component: lazy(() => import("../../pages/SignIn")),
        exact: true,
    },
    {
        path: "/sign-in",
        component: lazy(() => import("../../pages/SignIn")),
        exact: true,
    },
    {
        path: "/sign-up",
        component: lazy(() => import("../../pages/SingUp")),
        exact: true,
    },
    {
        path: "/channel/:id",
        component: lazy(() => import("../../pages/Dashboard")),
        exact: true,
    },
    {
        path: "/not-found",
        component: lazy(() => import("../../pages/NotFound/404")),
    },
    {
        path: "/error",
        component: lazy(() => import("../../pages/NotFound/404")),
    },
]
export { Routes };