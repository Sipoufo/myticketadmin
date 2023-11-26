const URL = process.env.REACT_APP_API_URL;

// Users
export const AllUserEndPoint = (pageNumber, pageSize) =>
    URL + "/api/users/customer/" + pageNumber + "/" + pageSize;

export const UsersInfoEndPoint = () => URL + "/api/users/userInfo";

export const BlockUserEndPoint = (userId, block) =>
    URL + "/api/users/block/" + userId + "/" + block;

export const SearchUserEndPoint = (searchWord, pageNumber, pageSize) =>
    URL + "/api/users/search/" + searchWord + "/" + pageNumber + "/" + pageSize;

export const OneUserInfoEndPoint = (userId) =>
    URL + "/api/users/userInfo/" + userId;

export const FetchAllUserEventsEndPoint = (userId, pageNumber, pageSize) =>
    URL + "/api/event/user/" + userId + "/" + pageNumber + "/" + pageSize;

export const FetchAllUserTicketsEndPoint = (userId, pageNumber, pageSize) =>
    URL + "/api/ticketBuy/user/" + userId + "/" + pageNumber + "/" + pageSize;
