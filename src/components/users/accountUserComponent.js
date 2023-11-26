import React, { useEffect, useState } from "react";
import InputWidget from "../../widgets/inputWidget";
import ButtonWidget from "../../widgets/buttonWidget";
import { OneUserInfoService } from "../../services/userService";
import { useParams } from "react-router-dom";
import LoadingComponent from "../loadingComponent";

const AccountUserComponent = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { idUser } = useParams();

    const UserInfo = async (idUser) => {
        const data = await OneUserInfoService(idUser);
        setUser(data.data);
    };

    useEffect(() => {
        UserInfo(idUser);
        setLoading(false);
    }, [idUser]);

    if (loading || user == null) {
        return <LoadingComponent />
    }
    return (
        <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Infos */}
            <div className="flex flex-col gap-6 w-full md:w-6/12">
                <InputWidget
                    label={"Full Name"}
                    type={"text"}
                    name={"name"}
                    value={user["lastName"] + " " + user["lastName"]}
                    disable={true}
                />
                <InputWidget
                    label={"Email"}
                    type={"email"}
                    name={"email"}
                    value={user["email"]}
                    disable={true}
                />
                <InputWidget
                    label={"Phone"}
                    type={"text"}
                    name={"phone"}
                    value={user["phone"]}
                    disable={true}
                />
                <InputWidget
                    label={"Address"}
                    type={"text"}
                    name={"address"}
                    value={user["address"] ? user["address"] : ""}
                    disable={true}
                />
                <div className="flex flex-col md:flex-row gap-4 bg">
                    <ButtonWidget name={"See Report"} color={"bg-green-500"} />
                    <ButtonWidget name={"Block"} color={"bg-amber-400"} />
                    <ButtonWidget name={"Delete"} color={"bg-rose-400"} />
                </div>
            </div>
        </div>
    );
};

export default AccountUserComponent;
