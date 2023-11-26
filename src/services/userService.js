import axios from "axios";
import { AllUserEndPoint, BlockUserEndPoint, FetchAllUserEventsEndPoint, FetchAllUserTicketsEndPoint, OneUserInfoEndPoint, SearchUserEndPoint, UsersInfoEndPoint } from "../constants/userEndpont";
import { GetToken, RemoveItems } from "./tokenService";
import { VerifyToken } from "./tokenVerification";

const headers = { Authorization: "Bearer " + GetToken() };

export const FetchAllUsersService = async (pageNumber, pageSize) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(AllUserEndPoint(pageNumber, pageSize), {
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

export const FetchUsersInfoService = async () => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(UsersInfoEndPoint(), {
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

export const BlockUserService = async (userId, block) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .put(BlockUserEndPoint(userId, block), undefined, {
            headers,
        })
        .then((response) => {
            window.location.replace("/users");
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

export const SearchUserService = async (searchWord, pageNumber, pageSize) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(SearchUserEndPoint(searchWord, pageNumber, pageSize), {
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

export const OneUserInfoService = async (userId) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(OneUserInfoEndPoint(userId), {
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

export const FetchAllUserEventsService = async (userId, pageNumber, pageSize) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(FetchAllUserEventsEndPoint(userId, pageNumber, pageSize), {
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

export const FetchAllUserTicketsService = async (userId, pageNumber, pageSize) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(FetchAllUserTicketsEndPoint(userId, pageNumber, pageSize), {
            headers,
        })
        .then((response) => {
            console.log(response);
            return {
                isError: false,
                message: null,
                data: response.data,
            };
        })
        .catch((e) => {
            console.log(e);
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