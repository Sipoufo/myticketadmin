import React, { useState } from "react";
import InputWidget from "../../widgets/inputWidget";
import ButtonWidget from "../../widgets/buttonWidget";

const AccountUserComponent = () => {
    const [name, setName] = useState("BLACKCode Yvan");
    const [email, setEmail] = useState("sipoufoknj@gmail.com");
    const [phone, setPhone] = useState("695914926");
    const [address, setAddress] = useState("Yassa");
    return (
        <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Infos */}
            <div className="flex flex-col gap-6 w-full md:w-6/12">
                <InputWidget
                    label={"Full Name"}
                    type={"text"}
                    name={"name"}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    disable={true}
                />
                <InputWidget
                    label={"Email"}
                    type={"email"}
                    name={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    disable={true}
                />
                <InputWidget
                    label={"Phone"}
                    type={"text"}
                    name={"phone"}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    disable={true}
                />
                <InputWidget
                    label={"Address"}
                    type={"text"}
                    name={"address"}
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
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
