import React, { useState } from "react";
import InputWidget from "../../widgets/inputWidget";
import { Link } from "react-router-dom";
import ButtonWidget from "../../widgets/buttonWidget";

const ResetPassword = () => {
    // const { token } = useParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <form className="flex flex-col gap-4 w-full">
                {/* Email */}
                <InputWidget
                    label={"Email Address"}
                    type={"email"}
                    name={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder={"xxx@xxx.com"}
                />
                {/* Password */}
                <InputWidget
                    label={"Password"}
                    type={"password"}
                    name={"email"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder={"password"}
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
        </div>
    );
};

export default ResetPassword;
