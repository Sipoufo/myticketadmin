import React from "react";

const ButtonWidget = ({ name, color }) => {
    return (
        <button
            type="submit"
            className={`${color ? color : "bg-primary"} w-full font-medium px-4 py-3 text-white rounded-lg`}
        >
            {name}
        </button>
    );
};

export default ButtonWidget;
