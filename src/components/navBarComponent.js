import React from "react";
import ButtonNavBarWidget from "../widgets/buttonNavBar";
import { SiWindows11 } from "react-icons/si";
import { IoWalletOutline, IoLogOut } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";

const NavBarComponent = () => {
    return (
        <div className="flex flex-col justify-between w-3/12 md:w-2/12  bg-secondary px-4 py-6 group hover:absolute md:hover:relative hover:h-screen hover:w-6/12 md:hover:w-2/12">
            <div className="flex flex-col w-full gap-8">
                <h1 className="font-extrabold text-2xl text-white text-center">
                    MyTicket
                </h1>
                <div className="flex flex-col">
                    <ButtonNavBarWidget
                        link={""}
                        icon={<SiWindows11 />}
                        name={"Overview"}
                    />
                    <ButtonNavBarWidget
                        link={""}
                        icon={<IoWalletOutline />}
                        name={"Balances"}
                    />
                    <ButtonNavBarWidget
                        link={""}
                        icon={<VscArrowSwap />}
                        name={"Transaction"}
                    />
                    <ButtonNavBarWidget
                        link={""}
                        icon={<HiOutlineUsers />}
                        name={"Users"}
                    />
                    <ButtonNavBarWidget
                        link={""}
                        icon={<HiOutlineUsers />}
                        name={"Admin"}
                    />
                    <ButtonNavBarWidget
                        link={""}
                        icon={<BsBellFill />}
                        name={"Notification"}
                    />
                    <ButtonNavBarWidget
                        link={""}
                        icon={<AiOutlineSetting />}
                        name={"Setting"}
                    />
                </div>
            </div>
            <div className="flex flex-col w-full gap-8 text-white">
                <ButtonNavBarWidget
                    link={""}
                    icon={<IoLogOut />}
                    name={"logout"}
                    isLogout={true}
                />
                <hr className="w-full border border-third" />
                <div className="w-full flex flex-row justify-center md:justify-between group-hover:gap-2">
                    {/* Indicator */}
                    <div className="h-8 w-8 rounded-full bg-third border border-white flex justify-center items-center font-semibold">
                        B
                    </div>
                    {/* Infos */}
                    <div className="hidden md:flex flex-col w-6/12 lg:w-8/12 group-hover:block">
                        <h1 className="font-semibold text-sm whitespace-nowrap overflow-hidden block text-ellipsis">BlackCode Yvan</h1>
                        <h1 className="font-medium text-[10px] text-sixth whitespace-nowrap overflow-hidden block text-ellipsis">sipoufoknj@gmail.com</h1>
                    </div>
                    <button className="hidden md:block group-hover:block">
                        <BsThreeDotsVertical className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBarComponent;
