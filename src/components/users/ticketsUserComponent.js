import React, { useEffect, useState } from "react";
import PaginationWidget from "../../widgets/paginationWidget";
import { useParams } from "react-router-dom";
import { FetchAllUserTicketsService } from "../../services/userService";
import LoadingComponent from "../loadingComponent";
import moment from "moment";

const TicketsUserComponent = () => {
    const { idUser } = useParams();
    const [tickets, setTickets] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [loading, setLoading] = useState(true);

    const fetchAllUserTickets = async (idUser, pageNumber, pageSize) => {
        console.log(idUser);
        const data = await FetchAllUserTicketsService(
            idUser,
            pageNumber,
            pageSize
        );
        console.log(data.data);
        setTickets(data.data);
        setPageNumber(data.data["pageable"]["pageNumber"] + 1);
        setPageSize(data.data["pageable"]["pageSize"]);
    };

    useEffect(() => {
        fetchAllUserTickets(idUser, pageNumber, pageSize);
        setLoading(false);
    }, [idUser, pageNumber, pageSize]);

    if (loading || tickets === null) {
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
                            Event
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/12">
                            Ticket Type
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/12">
                            Start Event
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/12">
                            End Event
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/12">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tickets["data"].map((ticket) => {
                        return (
                            <tr
                                key={ticket["ticketBuyId"]}
                                className="bg-white border-b hover:bg-gray-50"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                                >
                                    {ticket["ticket"]["name"]}
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                    {ticket["ticket"]["event"]["name"]}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                    {ticket["ticket"]["ticketType"]["name"]}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                    {moment(
                                        ticket["ticket"]["event"]["startEvent"],
                                        "YYYY-MM-DD HH:mm+ZZ"
                                    ).format("DD/MM/YYYY hh:mm")}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                    {moment(
                                        ticket["ticket"]["event"]["endEvent"],
                                        "YYYY-MM-DD HH:mm+ZZ"
                                    ).format("DD/MM/YYYY hh:mm")}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                    {ticket["ticket"]["price"]}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <PaginationWidget
                start={pageNumber}
                end={
                    pageSize > tickets["dataNumber"]
                        ? tickets["dataNumber"]
                        : pageSize
                }
                size={tickets["dataNumber"]}
            />
        </div>
    );
};

export default TicketsUserComponent;
