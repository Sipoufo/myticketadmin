import React, { useEffect, useState } from "react";
import InputWidget from "../../widgets/inputWidget";
import ButtonWidget from "../../widgets/buttonWidget";
import { FetchAllRequests } from "../../services/requestService";
import { FetchImage } from "../../services/imageService"
import { useParams } from "react-router-dom";
import LoadingComponent from "../loadingComponent";

const RequestInfoComponent = () => {
    const [request, setRequest] = useState(null);
    const [requests, setRequests] = useState(null);
    const [loading, setLoading] = useState(true);
    const { requestId } = useParams();

    const fetchRequests = async () => {
        const data = await FetchAllRequests(1, 50000);
        setRequests(data.data);
    }
    const RequestInfo = () => {
        if (requests !== null) {
            const requestInfo = requests.find(request => request.requestOrganiserId === +requestId)
            setRequest(requestInfo);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, [requestId]);

    useEffect(() => {
        RequestInfo();
        setLoading(false);
    }, [requests]);

    if (loading || request == null) {
        return <LoadingComponent />;
    }
    return (
        <div className="flex flex-col-reverse md:flex-col gap-6">
            {/* Infos */}
            <div className="flex flex-col gap-6 w-full md:w-6/12">
                <InputWidget
                    label={"Full Name"}
                    type={"text"}
                    name={"name"}
                    value={request.user["lastName"] + " " + request.user["lastName"]}
                    disable={true}
                />
                <InputWidget
                    label={"Email"}
                    type={"email"}
                    name={"email"}
                    value={request.user["email"]}
                    disable={true}
                />
                <InputWidget
                    label={"Phone"}
                    type={"text"}
                    name={"phone"}
                    value={request.user["phone"]}
                    disable={true}
                />
                <InputWidget
                    label={"Status"}
                    type={"text"}
                    name={"status"}
                    value={request.user["estateOrganiser"]}
                    disable={true}
                />
                {/* <div className="flex flex-col md:flex-row gap-4 bg">
                    <ButtonWidget name={"See Report"} color={"bg-green-500"} />
                    <ButtonWidget name={"Block"} color={"bg-amber-400"} />
                    <ButtonWidget name={"Delete"} color={"bg-rose-400"} />
                </div> */}
            </div>
        </div>
    );
};

export default RequestInfoComponent;
