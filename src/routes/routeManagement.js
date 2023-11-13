import React from "react";
import { Route, Routes } from "react-router-dom";
// import IndexAuth from "../pages/authentication";
// import SignIn from "../pages/authentication/signIn";
// import ForgetPassword from "../pages/authentication/forgetPassword";
// import ResetPassword from "../pages/authentication/resetPassword";
import IndexOther from "../pages/other";
import Users from "../pages/other/users";
import Overview from "../pages/other/overview";
import UserDetail from "../pages/other/userDetail";
import AccountUserComponent from "../components/users/accountUserComponent";
import EventsUserComponent from "../components/users/eventsUserComponent";
import UserComponent from "../components/users/userComponent";
import TicketsUserComponent from "../components/users/ticketsUserComponent";
import Setting from "../pages/other/setting";
import AccountSettingComponent from "../components/setting/accountSettingComponent";
import PasswordSettingComponent from "../components/setting/passwordSettingComponent";

const RouteManagement = () => {
    return (
        <Routes>
            {/* If user have token, auth will be principal route */}
            {/* <Route path="/" element={<IndexAuth />}>
                <Route index element={<SignIn />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path="/resetPassword/:token" element={<ResetPassword />} />
            </Route> */}
            <Route path="/" element={<IndexOther />}>
                <Route index element={<Overview />} />
                <Route path="/users/" element={<Users />}>
                    <Route index element={<UserComponent />} />
                    <Route path=":idUser/" element={<UserDetail />}>
                        <Route index element={<AccountUserComponent />} />
                        <Route
                            path="events"
                            element={<EventsUserComponent />}
                        />
                        <Route
                            path="tickets"
                            element={<TicketsUserComponent />}
                        />
                    </Route>
                </Route>
                <Route path="/setting/" element={<Setting />}>
                    <Route path="account" element={<AccountSettingComponent />} />
                    <Route path="password" element={<PasswordSettingComponent />} />
                </Route>
                {/* <Route path="/user/:idUser/" element={<UserDetail />}>
                    <Route index element={<AccountUserComponent />} />
                    <Route path="events" element={<EventsUserComponent />} />
                </Route> */}
            </Route>
        </Routes>
    );
};

export default RouteManagement;
