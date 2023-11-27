import { CreateAdminEndPoint } from "../constants/adminEndpoint";
import axios from "axios";
import { GetToken, RemoveItems } from "./tokenService";
import { VerifyToken } from "./tokenVerification";

const headers = { Authorization: "Bearer " + GetToken() };

export const CreateAdminService = async (data) => {
    console.log(data);
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .post(CreateAdminEndPoint(), data, {
            headers,
        })
        .then((response) => {
            return {
                data: null,
                isError: false,
                code: response.status,
                message: "Admin created !",
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
