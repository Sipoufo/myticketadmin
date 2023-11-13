import React from "react";

const ButtonWidget = ({ name }) => {
    return (
        <button
            type="submit"
            className="font-medium px-4 py-3 bg-primary text-white rounded-lg"
        >
            {name}
        </button>
    );
};

export default ButtonWidget;
