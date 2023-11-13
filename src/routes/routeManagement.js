import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexAuth from "../pages/authentication";
import SignIn from "../pages/authentication/signIn";
import ForgetPassword from "../pages/authentication/forgetPassword";
import ResetPassword from "../pages/authentication/resetPassword";

const RouteManagement = () => {
    return (
        <Routes>
            {/* If user have token, auth will be principal route */}
            <Route path="/" element={<IndexAuth />}>
                <Route index element={<SignIn />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path="/resetPassword/:token" element={<ResetPassword />} />
            </Route>
        </Routes>
    )
}

export default RouteManagement;