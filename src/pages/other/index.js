import React from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent from "../../components/navBarComponent";
import HeaderComponent from "../../components/headerComponent";

const IndexOther = () => {
    return (
        <div className="relative w-screen h-screen justify-center bg-background flex font-poppins text-sm">
            <div className="flex flex-row w-full h-full max-w-screen-2xl">
                {/* nav Bar */}
                <NavBarComponent />
                {/* body */}
                <div className="flex flex-col flex-grow overflow-auto">
                    <HeaderComponent />
                    <div className="flex flex-grow px-4 py-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexOther;
