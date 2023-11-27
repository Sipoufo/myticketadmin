import React, { useState } from "react";
import InputWidget from "../../widgets/inputWidget";
import { Link, useParams } from "react-router-dom";
import ButtonWidget from "../../widgets/buttonWidget";
import LoadingComponent from "../../components/loadingComponent";
import { ResetPasswordService } from "../../services/authenticationService";
import AlertMessageComponent from "../../components/alertMessageComponent";

const ResetPassword = () => {
    const { token } = useParams();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);
    const [data, setData] = useState(false);

    const HandleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            token,
            newPassword: password,
            confirmPassword,
        };
        const response = await ResetPasswordService(data);
        setActiveMessageBox(true);
        setData(response);
        setLoading(false);
    };

    if (loading) {
        <LoadingComponent />;
    }
    return (
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 flex flex-col items-center justify-center gap-10">
            <img
                src={process.env.PUBLIC_URL + "/assets/logos/logo.png"}
                className="w-full object-contain"
                alt="logo"
            />
            <h2 className="font-semibold text-xl">Reset Password !</h2>
            <p className="text-center -mt-6">
                Enter your new password and re-login you.
            </p>
            <form
                className="flex flex-col gap-4 w-full"
                onSubmit={HandleResetPassword}
            >
                {/* Password */}
                <InputWidget
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder={"Password"}
                />
                {/* COnfirm Password */}
                <InputWidget
                    label={"Confirm Password"}
                    type={"password"}
                    name={"confirmPassword"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    placeholder={"Confirm Password"}
                />
                {/* Submit Button */}
                <ButtonWidget name={"Reset"} />
                <div className="flex justify-center">
                    <Link
                        to={"/"}
                        className="text-third font-medium underline underline-offset-2 hover:no-underline"
                    >
                        Back to login
                    </Link>
                </div>
            </form>
            <AlertMessageComponent
                isActive={activeMessageBox}
                title={data["isError"] ? "Error" : "Success"}
                message={data["message"]}
                setIsActive={setActiveMessageBox}
                isError={data["isError"]}
            />
        </div>
    );
};

export default ResetPassword;
