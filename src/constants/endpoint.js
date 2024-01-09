const URL = process.env.REACT_APP_API_URL;

// Authentication
export const SignInEndpoint = () => URL + "/api/auth/signin";
export const ForgetPasswordEndpoint = () => URL + "/api/auth/forgetPassword";
export const ResetPasswordEndpoint = () => URL + "/api/auth/resetPassword";

// Organizer Request
export const OrganizerRequest_EndPoint = (pageNumber, dataSize) => URL + "/api/requestOrganizer/" + pageNumber + "/" + dataSize;