import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import PaginationWidget from "../../widgets/paginationWidget";
import { FetchAllRequests, ResolveRequest } from "../../services/requestService";
import LoadingComponent from "../../components/loadingComponent";

const RequestComponent = () => {
    const [requests, setRequests] = useState(null);
    const [globalRequests, setGlobalRequests] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 1;
    const [seeState, setSeeState] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchWord, setSearchWord] = useState("");
    const [startNumber, setStartNumber] = useState(1);
    const [endNumber, setEndNumber] = useState(0);
    const [requestCount, setRequestCount] = useState(0);


    const incrementPageNumber = () => {
        if(((pageNumber+1) * pageSize) <= globalRequests.length){
            setPageNumber(pageNumber+1);
        }
    }
    const decrementPageNumber = () => {
        if (pageNumber-1 > 0){
            setPageNumber(pageNumber-1);
        }
    }

    const paginateCounter = () => {
        if (requests !== null)
            setRequestCount(requests.length);
        showingPaginationValues();
    }

    const showingPaginationValues = () => {
        setStartNumber(((pageNumber-1) * pageSize + 1));
        setEndNumber(requestCount * pageNumber);
    }
    
    const fetchAllORequests = async (pageNumber, pageSize) => {
        const data = await FetchAllRequests(pageNumber, pageSize);
        setRequests(data.data);
    }

    const fetchGRequests = async () => {
        const data = await FetchAllRequests(1, 50000);
        setGlobalRequests(data.data);
    }

    // const searchUsers = async (e, pageNumber, pageSize) => {
    //     e.preventDefault();
    //     const data = await SearchUserService(searchWord ? searchWord : "", pageNumber, pageSize);
    //     console.log(data);
    //     setRequests(data.data);
    //     setPageNumber(data.data["pageable"]["pageNumber"] + 1);
    //     setPageSize(data.data["pageable"]["pageSize"]);
    // };


    const resolveOrganizerRequest = async (requestId, isAccepted) => {
        const data = {
            "accepted": isAccepted,
            "message" : "Okay",
        };
        await ResolveRequest(requestId, data);
    }

    useEffect(() => {
        fetchAllORequests(pageNumber, pageSize);
        fetchGRequests();
        setLoading(false);
    }, [pageNumber, pageSize]);

    useEffect(() => {
        paginateCounter();
    }, [requests]);


    if (loading || requests === null || globalRequests === null) {
        return <LoadingComponent />;
    }
    return (
        <div className="flex flex-col gap-8 w-full">
            {/* Users Statistics */}
            <div className="flex flex-col gap-2">
                <h1 className="text-base text-third font-medium">
                    Requests Statistics
                </h1>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Total</h1>
                            <p className="text-base font-semibold">
                                {globalRequests.length}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Approuved</h1>
                            <p className="text-base font-semibold">
                                {globalRequests.filter(request => request.accepted).length}

                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-fourth">Not Approuved</h1>
                            <p className="text-base font-semibold">
                                {globalRequests.filter(request => !request.accepted).length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-2">
                <h1 className="w-full text-base text-third font-medium">
                    Requests Details
                </h1>
                <div className="w-full overflow-auto sm:rounded-lg bg-white shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center" 
                                // onSubmit={(e) => searchUsers(e, 1, 20)}
                            >
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
                                        value={searchWord}
                                        className="bg-background border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                                        placeholder="Search"
                                        onChange={(e) => setSearchWord(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            
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
                                        <li className="hover:bg-third" sel>
                                            <a
                                                href="/"
                                                className="block py-2 px-4"
                                            >
                                                All
                                            </a>
                                        </li>
                                        <li className="hover:bg-third">
                                            <a
                                                href="/"
                                                className="block py-2 px-4"
                                            >
                                                Not Approuved
                                            </a>
                                        </li>
                                        <hr />
                                        <li className="hover:bg-third">
                                            <a
                                                href="/"
                                                className="block py-2 px-4"
                                            >
                                                Pending
                                            </a>
                                        </li>
                                        <li className="hover:bg-third">
                                            <a
                                                href="/"
                                                className="block py-2 px-4"
                                            >
                                                Approuved
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
                                    Full Name
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    State
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
                            {requests.map((request) => {
                                return (
                                    
                                    <tr
                                        key={request.requestOrganiserId}
                                        className="bg-white border-b hover:bg-gray-50"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                                        >
                                            {request.user.firstName + " " + request.user.lastName}
                                        </th>

                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {request.user.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {request.user.phone}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {request.user.estateOrganiser}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {request.accepted ? (
                                                <span className="px-3 py-1 rounded-lg bg-green-500 text-white">
                                                    Approved
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 rounded-lg bg-rose-500 text-white">
                                                    Disapproved
                                                </span>
                                            )}
                                        </td>
                                        <td className="flex items-center px-6 py-4 whitespace-nowrap w-2/12">
                                            <a
                                                href={`/requests/${request.requestOrganiserId}`}
                                                className="font-medium text-blue-600 hover:underline"
                                            >
                                                Consult
                                            </a>
                                            <button
                                                className={`${!request.accepted ? "text-green-600" : "text-red-600"} font-medium hover:underline ms-3`}
                                                onClick={() => resolveOrganizerRequest(request.requestOrganiserId, !request.accepted )}
                                            >
                                                {!request.accepted ? "Approve" : "Disapprove"}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <PaginationWidget
                        start={startNumber}
                        end={endNumber}
                        size={globalRequests.length}
                        incrementPageNum={incrementPageNumber}
                        decrementPageNum={decrementPageNumber}
                    />
                </div>
            </div>



        </div>
    )
}

export default RequestComponent;