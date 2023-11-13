import React from "react";
import { Outlet } from "react-router-dom";

const IndexAuth = () => {
    return (
        <div className="w-screen h-screen bg-background flex font-poppins text-sm">
            <div className="flex w-full h-full justify-center items-center">
                <Outlet />
            </div>
        </div>
    )
}

export default IndexAuth;