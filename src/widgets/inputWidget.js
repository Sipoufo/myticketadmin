import React from "react";

const InputWidget = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    disable = false,
    isRequired = false,
}) => {
    return (
        <div className="w-full flex flex-col gap-1">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                className="border text-black text-xs placeholder:text-fourth px-4 py-3 rounded-lg"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disable}
                required={isRequired}
            />
        </div>
    );
};

export default InputWidget;
