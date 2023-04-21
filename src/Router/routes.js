import React, { lazy, Suspense, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Loader from "../components/Loader"
import ProtectedRoute from "./ProtectedRoute";

// ALL PAGE //
const Dashboard = lazy(() => import("../pages/Dashboard"))
const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SingUp"))

const Routes = () => {
    const [user, setUser] = useState(true);
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={SignIn} />
                    <Route exact path={"/sign-in"} component={SignIn} />
                    <Route exact path={"/login"} component={SignIn} />
                    <Route exact path={"/sign-up"} component={SignUp} />
                    <Route exact path={"/channel/:channelId"} component={Dashboard} />

                    {/* ALL PROTECTED ROUTE */}
                    <ProtectedRoute user={user} exact path={"/channel/:channelId"} component={Dashboard} />
                </Switch>
            </BrowserRouter> 
        </Suspense>
    )
}

export default Routes