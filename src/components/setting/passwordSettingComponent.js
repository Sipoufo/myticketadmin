import React, { useState } from "react";
import InputWidget from "../../widgets/inputWidget";
import ButtonWidget from "../../widgets/buttonWidget";

const PasswordSettingComponent = () => {
    const [email, setEmail] = useState("sipoufoknj@gmail.com");
    const [password, setPassword] = useState("Azerty@12");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Infos */}
            <div className="flex flex-col gap-6 w-full md:w-6/12">
                <InputWidget
                    label={"Email"}
                    type={"text"}
                    name={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder={"Email"}
                    isRequired={true}
                />
                <InputWidget
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder={"Password"}
                    isRequired={true}
                />
                <InputWidget
                    label={"Confirm Password"}
                    type={"password"}
                    name={"password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    placeholder={"Confirm Password"}
                    isRequired={true}
                />
                <div className="flex flex-col md:flex-row gap-4 bg">
                    <ButtonWidget name={"Update"} color={"bg-primary"} />
                </div>
            </div>
        </div>
    );
};

export default PasswordSettingComponent;
