import React, { lazy } from "react";
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from "react-router-dom";
import {Routes} from "./routes"

const Error = lazy(() => import('../pages/NotFound/404'))

const AllRoutes = ({ component: Component, ...rest }) => {
    const token = "fdsdsf345edjv34t-dfg45ydfb=cbvertdbvvdsklrwefw325"
    return (
        <Route {...rest} render={(props) => {
            if (token) {
              return <Redirect to={{ pathname: "/channel/:id", state: { from: props.location } }} />
            } else {
              return <Component {...props} {...rest} />
            }
          }} />
    )
}
const Router = () => {
    return (
        <AppRouter>
            <Switch>
                {Routes.map((route, key) => (
                    <AllRoutes component={route.component} path={route.path} key={key} {...route} exact />
                ))}
                <Route path="*" component={Error} />
            </Switch>
        </AppRouter>
    )
}

export default Router