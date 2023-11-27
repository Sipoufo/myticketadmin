import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import PaginationWidget from "../../widgets/paginationWidget";
import { BlockUserService, FetchAllUsersService, FetchUsersInfoService, SearchUserService } from "../../services/userService";
import LoadingComponent from "../loadingComponent";

const UserComponent = () => {
    const [users, setUsers] = useState(null);
    const [usersInfo, setUsersInfo] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [seeState, setSeeState] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchWord, setSearchWord] = useState(true);

    const fetchAllUsers = async (number, size) => {
        const data = await FetchAllUsersService(false, number, size);
        console.log(data.data);
        setUsers(data.data);
        setPageNumber(data.data["pageable"]["pageNumber"] + 1);
        setPageSize(data.data["pageable"]["pageSize"]);
    };

    const searchUsers = async (e, pageNumber, pageSize) => {
        e.preventDefault();
        const data = await SearchUserService(searchWord ? searchWord : "", pageNumber, pageSize);
        setUsers(data.data);
        setPageNumber(data.data["pageable"]["pageNumber"] + 1);
        setPageSize(data.data["pageable"]["pageSize"]);
    };

    const fetchUserInfo = async () => {
        const data = await FetchUsersInfoService();
        console.log(data.data);
        setUsersInfo(data.data);
    };

    const blockUserById = async (userId, block) => {
        await BlockUserService(false, userId, block);
    };

    useEffect(() => {
        fetchAllUsers(pageNumber, pageSize);
        fetchUserInfo();
        setLoading(false);
    }, [pageNumber, pageSize]);

    if (loading || usersInfo === null || users === null) {
        return <LoadingComponent />;
    }
    return (
        <div className="flex flex-col gap-8 w-full">
            {/* Users Statistics */}
            <div className="flex flex-col gap-2">
                <h1 className="text-base text-third font-medium">
                    Users Statistics
                </h1>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Nbr Users</h1>
                            <p className="text-base font-semibold">
                                {usersInfo["userNumber"]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Nbr Events</h1>
                            <p className="text-base font-semibold">
                                {usersInfo["eventNumber"]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Nbr Tickets</h1>
                            <p className="text-base font-semibold">
                                {usersInfo["ticketNumber"]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Users Details */}
            <div className="w-full flex flex-col gap-2">
                <h1 className="w-full text-base text-third font-medium">
                    Users Details
                </h1>
                <div className="w-full overflow-auto sm:rounded-lg bg-white shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center" onSubmit={(e) => searchUsers(e, 1, 20)}>
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
                                        onChange={(e) => setSearchWord(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            {/* <button
                                type="button"
                                className="flex items-center justify-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                            >
                                <FaPlus className="text-lg text-white mr-2" />
                                Add
                            </button> */}
                            <div className="flex justify-end items-start space-x-3 w-full md:w-auto">
                                <button
                                    id="actionsDropdownButton"
                                    data-dropdown-toggle="actionsDropdown"
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
                                    FirstName
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/12">
                                    LastName
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/12">
                                    state
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users["data"].map((user) => {
                                return (
                                    <tr
                                        key={user["userId"]}
                                        className="bg-white border-b hover:bg-gray-50"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                                        >
                                            {user["firstName"]}
                                        </th>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {user["lastName"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {user["email"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {user["phone"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {user["state"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {user["deleted"] ? (
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
                                                href={`/users/${user["userId"]}`}
                                                className="font-medium text-blue-600 hover:underline"
                                            >
                                                See more
                                            </a>
                                            <button
                                                className={`${user["deleted"] ? "text-green-600" : "text-red-600"} font-medium hover:underline ms-3`}
                                                onClick={() => blockUserById(user["userId"], !user["deleted"])}
                                            >
                                                {user["deleted"] ? "Unblock" : "Block"}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <PaginationWidget
                        start={pageNumber}
                        end={pageSize > users["dataNumber"] ? users["dataNumber"] : pageSize}
                        size={users["dataNumber"]}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserComponent;
