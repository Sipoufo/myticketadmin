import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import PaginationWidget from "../../widgets/paginationWidget";
import LoadingComponent from "../../components/loadingComponent";
import {
    BlockUserService,
    FetchAdminsInfoService,
    FetchAllUsersService,
} from "../../services/userService";
import AddAdmin from "../../components/addAdmin";

const Administration = () => {
    const [admins, setAdmins] = useState(null);
    const [adminsInfo, setAdminsInfo] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [seeState, setSeeState] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeModal, setActiveModal] = useState(false);
    const [searchWord, setSearchWord] = useState(true);

    const fetchAllUsers = async (number, size) => {
        const data = await FetchAllUsersService(true, number, size);
        console.log(data.data);
        setAdmins(data.data);
        setPageNumber(data.data["pageable"]["pageNumber"] + 1);
        setPageSize(data.data["pageable"]["pageSize"]);
    };

    // const searchUsers = async (e, pageNumber, pageSize) => {
    //     e.preventDefault();
    //     const data = await SearchUserService(searchWord ? searchWord : "", pageNumber, pageSize);
    //     setAdmins(data.data);
    //     setPageNumber(data.data["pageable"]["pageNumber"] + 1);
    //     setPageSize(data.data["pageable"]["pageSize"]);
    // };

    const fetchUserInfo = async () => {
        const data = await FetchAdminsInfoService();
        console.log(data.data);
        setAdminsInfo(data.data);
    };

    const blockUserById = async (userId, block) => {
        await BlockUserService(true, userId, block);
    };

    useEffect(() => {
        fetchAllUsers(pageNumber, pageSize);
        fetchUserInfo();
        setLoading(false);
    }, [pageNumber, pageSize]);

    if (loading || adminsInfo === null || admins === null) {
        return <LoadingComponent />;
    }

    return (
        <div className="flex flex-col gap-8 w-full">
            {/* Administrations Statistics */}
            <div className="flex flex-col gap-2">
                <h1 className="text-base text-third font-medium">
                    Administrations Statistics
                </h1>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Nbr Administrators</h1>
                            <p className="text-base font-semibold">
                                {adminsInfo["adminNumber"]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Active</h1>
                            <p className="text-base font-semibold">
                                {adminsInfo["adminActiveNumber"]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Block</h1>
                            <p className="text-base font-semibold">
                                {adminsInfo["adminBlockNumber"]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Administrations Details */}
            <div className="w-full flex flex-col gap-2">
                <h1 className="w-full text-base text-third font-medium">
                    Administrations Details
                </h1>
                <div className="w-full overflow-auto sm:rounded-lg bg-white shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label
                                    htmlFor="simple-search"
                                    className="sr-only"
                                >
                                    Search
                                </label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <AiOutlineSearch className="text-xl text-fourth" />
                                    </div>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        className="bg-background border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                                        placeholder="Search"
                                        required=""
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button
                                className="z-10 w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white focus:outline-none bg-primary rounded-lg border border-gray-200 hover:bg-third focus:z-10 focus:ring-4 focus:ring-gray-200"
                                type="button"
                                onClick={() => setActiveModal(true)}
                            >
                                <FaPlus className="text-lg text-white mr-2" />
                                Add
                            </button>
                            <div className="flex justify-end items-start space-x-3 w-full md:w-auto">
                                <button
                                    className="z-10 w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white focus:outline-none bg-secondary rounded-lg border border-gray-200 hover:bg-third focus:z-10 focus:ring-4 focus:ring-gray-200"
                                    type="button"
                                    onClick={() => setSeeState(!seeState)}
                                >
                                    <IoIosArrowDown className="text-lg text-white mr-2" />
                                    State
                                </button>
                                <div
                                    className={`${
                                        !seeState && "hidden"
                                    } absolute w-screen h-screen top-0 left-0 bg-secondary bg-opacity-5`}
                                    onClick={() => setSeeState(false)}
                                ></div>
                                <div
                                    id="actionsDropdown"
                                    className={`${
                                        !seeState && "hidden"
                                    } absolute z-10 w-44 bg-secondary rounded divide-y divide-sixth shadow mt-10`}
                                >
                                    <ul
                                        className="py-1 text-sm text-white"
                                        aria-labelledby="actionsDropdownButton"
                                    >
                                        <li className="hover:bg-third">
                                            <a
                                                href="/"
                                                className="block py-2 px-4"
                                            >
                                                Active
                                            </a>
                                        </li>
                                        <hr />
                                        <li className="hover:bg-third">
                                            <a
                                                href="/"
                                                className="block py-2 px-4"
                                            >
                                                Block
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-fourth">
                        <thead className="text-xs text-secondary uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    State
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins["data"].map((admin) => {
                                return (
                                    <tr
                                        key={admin["userId"]}
                                        className="bg-white border-b hover:bg-gray-50"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                                        >
                                            {admin["firstName"] + " " + admin["lastName"]}
                                        </th>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {admin["email"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {admin["phone"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {admin["address"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {admin["deleted"] ? (
                                                <span className="px-3 py-1 rounded-lg bg-rose-500 text-white">
                                                    Block
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 rounded-lg bg-green-500 text-white">
                                                    Active
                                                </span>
                                            )}
                                        </td>
                                        <td className="flex items-center px-6 py-4 whitespace-nowrap w-2/12">
                                            <a
                                                href={`/admin/${admin["userId"]}`}
                                                className="font-medium text-blue-600 hover:underline"
                                            >
                                                Edit
                                            </a>
                                            <button
                                                className={`${
                                                    admin["deleted"]
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                } font-medium hover:underline ms-3`}
                                                onClick={() =>
                                                    blockUserById(
                                                        admin["userId"],
                                                        !admin["deleted"]
                                                    )
                                                }
                                            >
                                                {admin["deleted"]
                                                    ? "Unblock"
                                                    : "Block"}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <PaginationWidget />
                </div>
            </div>
            {/* <div className="z-20 fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-secondary bg-opacity-30">
                <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-10 bg-white">

                </div>
            </div> */}
            <AddAdmin active={activeModal} setActive={setActiveModal} />
        </div>
    );
};

export default Administration;
