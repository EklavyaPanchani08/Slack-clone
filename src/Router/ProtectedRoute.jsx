import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, jwt, user, ...rest }) => {
console.log("🚀 ~ file: ProtectedRoute.jsx:5 ~ ProtectedRoute ~ user:", user)

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
