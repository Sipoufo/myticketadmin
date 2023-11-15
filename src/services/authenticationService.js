import axios from "axios";
import {SignInEndpoint, ForgetPasswordEndpoint, ResetPasswordEndpoint} from "../constants/endpoint";
import { SetToken, SetUserId, SetUserName, SetUserRole } from "./tokenService";
import { SetCookies } from "./cookieService";

export const SignInService = async (data) => {
    return axios
        .post(SignInEndpoint(), data)
        .then((response) => {
            SetToken(response.data["token"]);
            SetUserName(response.data["firstName"]);
            SetUserId(response.data["user"]["userId"].toString());
            SetUserRole(response.data["user"]["role"]["name"]);
            SetCookies("refreshToken", response.data["refreshToken"]);
            return {
                isError: false,
                message: null,
                data: null,
                code: 200,
            };
        })
        .catch((e) => {
            return {
                data: null,
                isError: true,
                code: e.response.status,
                message: e.response.data["message"],
            };
        });
};

export const ForgetPasswordService = async (data) => {
    return axios
        .post(ForgetPasswordEndpoint(), data)
        .then((response) => {
            return {
                isError: false,
                message: response.data["message"],
                data: null,
            };
        })
        .catch((e) => {
            return {
                isError: true,
                message: e.response.data["message"],
                data: null,
            };
        });
};

export const ResetPasswordService = async (data) => {
    return axios
        .post(ResetPasswordEndpoint(), data)
        .then((response) => {
            return {
                isError: false,
                message: response.data["message"],
                data: null,
            };
        })
        .catch((e) => {
            return {
                isError: true,
                message: e.response.data["message"],
                data: null,
            };
        });
};