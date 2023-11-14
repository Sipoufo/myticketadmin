import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import PaginationWidget from "../../widgets/paginationWidget";

const UserComponent = () => {
    const [seeState, setSeeState] = useState(false);

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
                            <p className="text-base font-semibold">3803</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Nbr Events</h1>
                            <p className="text-base font-semibold">3803</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Nbr Tickets</h1>
                            <p className="text-base font-semibold">3803</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Users Details */}
            <div className="w-full flex flex-col gap-2">
                <h1 className="w-full text-base text-third font-medium">
                    Users Details
                </h1>
                <div class="w-full overflow-scroll sm:rounded-lg bg-white shadow-lg">
                    <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div class="w-full md:w-1/2">
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">
                                    Search
                                </label>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <AiOutlineSearch className="text-xl text-fourth" />
                                    </div>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class="bg-background border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                                        placeholder="Search"
                                        required=""
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            {/* <button
                                type="button"
                                class="flex items-center justify-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                            >
                                <FaPlus className="text-lg text-white mr-2" />
                                Add
                            </button> */}
                            <div class="flex justify-end items-start space-x-3 w-full md:w-auto">
                                <button
                                    id="actionsDropdownButton"
                                    data-dropdown-toggle="actionsDropdown"
                                    class="z-10 w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white focus:outline-none bg-secondary rounded-lg border border-gray-200 hover:bg-third focus:z-10 focus:ring-4 focus:ring-gray-200"
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
                                    class={`${
                                        !seeState && "hidden"
                                    } absolute z-10 w-44 bg-secondary rounded divide-y divide-sixth shadow mt-10`}
                                >
                                    <ul
                                        class="py-1 text-sm text-white"
                                        aria-labelledby="actionsDropdownButton"
                                    >
                                        <li className="hover:bg-third">
                                            <a
                                                href="/"
                                                class="block py-2 px-4"
                                            >
                                                Active
                                            </a>
                                        </li>
                                        <hr />
                                        <li className="hover:bg-third">
                                            <a
                                                href="/"
                                                class="block py-2 px-4"
                                            >
                                                Block
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table class="w-full text-sm text-left text-fourth">
                        <thead class="text-xs text-secondary uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 w-2/12">
                                    UserName
                                </th>
                                <th scope="col" class="px-6 py-3 w-2/12">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3 w-2/12">
                                    Phone Number
                                </th>
                                <th scope="col" class="px-6 py-3 w-1/12">
                                    Events
                                </th>
                                <th scope="col" class="px-6 py-3 w-1/12">
                                    Tickets
                                </th>
                                <th scope="col" class="px-6 py-3 w-2/12">
                                    State
                                </th>
                                <th scope="col" class="px-6 py-3 w-2/12">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b hover:bg-gray-50">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                                >
                                    BLACKCode Yvan
                                </th>
                                <td class="px-6 py-4 whitespace-nowrap w-2/12">
                                    sipoufoknj@gmail.com
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap w-2/12">
                                    695914926
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap w-1/12">
                                    20
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap w-1/12">
                                    200
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap w-2/12">
                                    <span className="px-3 py-1 rounded-lg bg-green-500 text-white">
                                        Active
                                    </span>
                                </td>
                                <td class="flex items-center px-6 py-4 whitespace-nowrap w-2/12">
                                    <a
                                        href="/users/1"
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href="/"
                                        class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                                    >
                                        Remove
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <PaginationWidget />
                </div>
            </div>
        </div>
    );
};

export default UserComponent;
