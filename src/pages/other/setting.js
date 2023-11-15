import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Setting =  () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg gap-10">
                {/* Menu */}
                <ul className="flex flex-row gap-4 text-base font-semibold">
                    <li>
                        <NavLink
                            to={`/setting/account`}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b p-3 border-primary text-primary"
                                    : "border-b p-3"
                            }
                        >
                            Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/setting/password`}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b p-3 border-primary text-primary"
                                    : "border-b p-3"
                            }
                        >
                            Password
                        </NavLink>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    )
}

export default Setting;