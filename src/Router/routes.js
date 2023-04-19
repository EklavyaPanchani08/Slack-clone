import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Loader from "../components/Loader"
import ProtectedRoute from "./ProtectedRoute";

// ALL PAGE //
const Chat = lazy(() => import("../components/Chat"))
const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SingUp"))

const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={SignIn} />
                    <Route exact path={"/sign-in"} component={SignIn} />
                    <Route exact path={"/login"} component={SignIn} />
                    <Route exact path={"/sign-up"} component={SignUp} />
                    <Route path={"/channel/:channelId"} component={Chat} />

                    {/* ALL PROTECTED ROUTE */}
                    {/* <ProtectedRoute /> */}
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}

export default Routes