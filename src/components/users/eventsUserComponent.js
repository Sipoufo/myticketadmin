import React, { useEffect, useState } from "react";
import PaginationWidget from "../../widgets/paginationWidget";
import { useParams } from "react-router-dom";
import { FetchAllUserEventsService } from "../../services/userService";
import LoadingComponent from "../loadingComponent";
import moment from "moment";

const EventsUserComponent = () => {
    const { idUser } = useParams();
    const [events, setEvents] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [loading, setLoading] = useState(true);

    const fetchAllUserEvents = async (idUser, pageNumber, pageSize) => {
        const data = await FetchAllUserEventsService(
            idUser,
            pageNumber,
            pageSize
        );
        console.log(data.data);
        setEvents(data.data);
        setPageNumber(data.data["pageable"]["pageNumber"] + 1);
        setPageSize(data.data["pageable"]["pageSize"]);
    };

    useEffect(() => {
        fetchAllUserEvents(idUser, pageNumber, pageSize);
        setLoading(false);
    }, [idUser, pageNumber, pageSize]);

    if (loading || events === null) {
        return <LoadingComponent />;
    }
    return (
        <div className="w-full overflow-auto sm:rounded-lg bg-white">
            <table className="w-full text-sm text-left text-fourth">
                <thead className="text-xs text-seventh uppercase bg-secondary">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-2/12">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/12">
                            Start Event
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/12">
                            End Event
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/12">
                            Event type
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/12">
                            State
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {events["data"].map((event) => {
                        return (
                            <tr
                                key={event["eventId"]}
                                className="bg-white border-b hover:bg-gray-50"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                                >
                                    {event["name"]}
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                    {moment(
                                        event["startEvent"],
                                        "YYYY-MM-DD HH:mm+ZZ"
                                    ).format("DD/MM/YYYY hh:mm")}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                    {moment(
                                        event["endEvent"],
                                        "YYYY-MM-DD HH:mm+ZZ"
                                    ).format("DD/MM/YYYY hh:mm")}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                    {event["event_type"]}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {event["deleted"] ? (
                                                <span className="px-3 py-1 rounded-lg bg-rose-500 text-white">
                                                    Block
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 rounded-lg bg-green-500 text-white">
                                                    Active
                                                </span>
                                            )}
                                        </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <PaginationWidget
                start={pageNumber}
                end={
                    pageSize > events["dataNumber"]
                        ? events["dataNumber"]
                        : pageSize
                }
                size={events["dataNumber"]}
            />
        </div>
    );
};

export default EventsUserComponent;
