import React from "react";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
// import InputWidget from "../../widgets/inputWidget";

const UserDetail = () => {
    const { idUser } = useParams();
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg gap-10">
                <div className="block">
                    <button
                        className="flex flex-row items-center gap-2 font-medium hover:cursor-pointer hover:text-primary"
                        onClick={() => window.location.replace("/users")}
                    >
                        <TbArrowBackUpDouble className="text-xl" />
                        <p>Back</p>
                    </button>
                </div>
                {/* Menu */}
                <ul className="flex flex-row gap-4 text-base font-semibold">
                    <li>
                        <NavLink
                            to={`/users/${idUser}/`}
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
                            to={`/users/${idUser}/events`}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b p-3 border-primary text-primary"
                                    : "border-b p-3"
                            }
                        >
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/users/${idUser}/tickets`}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b p-3 border-primary text-primary"
                                    : "border-b p-3"
                            }
                        >
                            Tickets
                        </NavLink>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    );
};

export default UserDetail;
