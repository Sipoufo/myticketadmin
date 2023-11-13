import React from "react";
import { BsBellFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const HeaderComponent = () => {
    return (
        <div className="flex flex-row justify-between px-4 py-6 border-b border-seventh items-center">
            <h1 className="font-semibold w-3/12 text-base whitespace-nowrap overflow-hidden block text-ellipsis">
                BLACKCode Yvan
            </h1>
            <div className="flex flex-row items-center gap-4">
                {/* Bell */}
                <div className="relative flex justify-end items-start">
                    <BsBellFill className="text-lg text-fourth" />
                    <div className="absolute h-2 w-2 rounded-full bg-[#299D91]"></div>
                </div>
                <form className="flex bg-white rounded-lg">
                    <input type="search" className="border-none text-black text-xs placeholder:text-fourth px-4 py-3" />
                    <button type="submit" className="text-lg px-2"> <AiOutlineSearch /> </button>
                </form>
            </div>
        </div>
    );
};

export default HeaderComponent;
