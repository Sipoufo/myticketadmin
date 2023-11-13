import React from "react";
// import { useParams } from "react-router-dom";

const EventsUserComponent = () => {
    // const { idUser } = useParams();
    return (
        <div class="w-full overflow-scroll sm:rounded-lg bg-white">
            <table class="w-full text-sm text-left text-fourth">
                <thead class="text-xs text-seventh uppercase bg-secondary">
                    <tr>
                        <th scope="col" class="px-6 py-3 w-2/12">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3 w-2/12">
                            Start Event
                        </th>
                        <th scope="col" class="px-6 py-3 w-2/12">
                            End Event
                        </th>
                        <th scope="col" class="px-6 py-3 w-2/12">
                            Nbr Places
                        </th>
                        <th scope="col" class="px-6 py-3 w-2/12">
                            State
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                        >
                            Event 1
                        </th>
                        <td class="px-6 py-4 whitespace-nowrap w-2/12">
                            12/12/2023
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap w-2/12">
                            12/12/2023
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap w-2/12">20</td>
                        <td class="px-6 py-4 whitespace-nowrap w-2/12">
                            <span className="px-3 py-1 rounded-lg bg-green-500 text-white">
                                Now
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EventsUserComponent;
