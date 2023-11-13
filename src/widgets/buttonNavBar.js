import React from "react";
import { Link } from "react-router-dom";

const ButtonNavBarWidget = ({ link, icon, name, isLogout }) => {
    return (
        <Link
            to={link}
            className={`${isLogout ? "bg-third hover:bg-rose-600" : "bg-transparent hover:bg-primary"} hover:text-white flex flex-row gap-2 lg:gap-4 justify-center sm:justify-start items-center px-2 lg:px-6 py-3 text-sixth rounded-md text-xs lg:text-sm group-hover:justify-start`}
        >
            <span className="text-xl md:text-sm lg:text-lg">{icon}</span>
            <span className={`${isLogout && "text-white"} hidden sm:block group-hover:block`}>{name}</span>
        </Link>
    );
};

export default ButtonNavBarWidget;
