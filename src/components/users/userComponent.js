import React from "react";

const UserComponent = () => {
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
                </div>
            </div>
        </div>
    )
}

export default UserComponent;