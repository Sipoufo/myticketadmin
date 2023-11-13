import React, { useState } from "react";
import InputWidget from "../../widgets/inputWidget";
import ButtonWidget from "../../widgets/buttonWidget";

const AccountSettingComponent = () => {
    const [name, setName] = useState("BLACKCode Yvan");
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
                    placeholder={"Full Name"}
                    isRequired={true}
                />
                <InputWidget
                    label={"Phone"}
                    type={"text"}
                    name={"phone"}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder={"Phone Number"}
                    isRequired={true}
                />
                <InputWidget
                    label={"Address"}
                    type={"text"}
                    name={"address"}
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    placeholder={"Address"}
                    isRequired={true}
                />
                <div className="flex flex-col md:flex-row gap-4 bg">
                    <ButtonWidget name={"Update"} color={"bg-primary"} />
                </div>
            </div>
        </div>
    );
};

export default AccountSettingComponent;
