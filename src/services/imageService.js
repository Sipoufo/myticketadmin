import { Image_EndPoint } from "../constants/endpoint";
import axios from "axios";
import { GetToken, RemoveItems } from "./tokenService";
import { VerifyToken } from "./tokenVerification";

// const headers = { Authorization: "Bearer " + GetToken() };

export const FetchImage = async (imageName) => {
    return Image_EndPoint(imageName);
};