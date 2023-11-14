import React from "react";
import { NavLink } from "react-router-dom";

const ButtonNavBarWidget = ({ link, icon, name, isLogout }) => {
    return (
        <NavLink
            to={link}
            className={({ isActive }) =>
                isActive
                    ? "bg-primary hover:text-white flex flex-row gap-2 lg:gap-4 justify-center sm:justify-start items-center px-2 lg:px-6 py-3 text-white rounded-md text-xs lg:text-sm group-hover:justify-start"
                    : "hover:text-white flex flex-row gap-2 lg:gap-4 justify-center sm:justify-start items-center px-2 lg:px-6 py-3 text-sixth rounded-md text-xs lg:text-sm group-hover:justify-start"
            }
        >
            <span className="text-xl md:text-sm lg:text-lg">{icon}</span>
            <span
                className={`${
                    isLogout && "text-white"
                } hidden sm:block group-hover:block`}
            >
                {name}
            </span>
        </NavLink>
    );
};

export default ButtonNavBarWidget;
