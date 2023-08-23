import React from 'react';

function Button({ label, onClick }) {
    const getButtonStyle = () => {
        switch (label) {
            case "=":
                return "bg-green-500 hover:bg-green-600";
            case "+":
            case "-":
            case "*":
            case "/":
                return "bg-blue-500 hover:bg-blue-600";
            default:
                return "bg-gray-300 hover:bg-gray-400";
        }
    };

    return (
        <button
            className={`w-20 h-20 text-5xl ${getButtonStyle()} rounded focus:outline-none`}
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    );
}

export default Button;
