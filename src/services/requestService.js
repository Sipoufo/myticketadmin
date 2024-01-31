import { OrganizerRequest_EndPoint, ResolveOganizerR_EndPoint } from "../constants/endpoint";
import axios from "axios";
import { GetToken, RemoveItems } from "./tokenService";
import { VerifyToken } from "./tokenVerification";

const headers = { Authorization: "Bearer " + GetToken() };

export const FetchAllRequests = async (pageNumber, dataSize) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(OrganizerRequest_EndPoint(pageNumber, dataSize), {
            headers,
        })
        .then((response) => {
            return {
                isError: false,
                message: null,
                data: response.data,
            };
        })
        .catch((e) => {
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};

export const ResolveRequest = async (requestId, data) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .put(ResolveOganizerR_EndPoint(requestId), data,{
            headers,
        })
        .then((response) => {
            window.location.reload();
        })
        .catch((e) => {
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};