import React, { useState } from "react";
import InputWidget from "../../widgets/inputWidget";
import { Link } from "react-router-dom";
import ButtonWidget from "../../widgets/buttonWidget";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    return (
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 flex flex-col items-center justify-center gap-10">
            <img
                src={process.env.PUBLIC_URL + "/assets/logos/logo.png"}
                className="w-full object-contain"
                alt="logo"
            />
            <h2 className="font-semibold text-xl">Forgot Password ?</h2>
            <p className="text-center -mt-6">
                Enter your email address to get the password reset link.
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
                {/* Submit Button */}
                <ButtonWidget name={"Password Reset"} />
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

export default ForgetPassword;
