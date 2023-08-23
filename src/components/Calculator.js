import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import { evaluate } from 'mathjs';

function Calculator() {
    const [input, setInput] = useState("");

    const handleButtonClick = (value) => {
        if (value === "=") {
            calculate();
        } else {
            setInput(input + value);
        }
    };

    const calculate = () => {
        try {
            setInput(evaluate(input).toString());
        } catch (error) {
            setInput("Errore");
        }
    };

    const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];

    return (
        <div className="p-10 bg-white rounded-lg shadow-xl w-99">
            <Display value={input} />
            <div className="grid grid-cols-4 gap-4">
                {buttons.map((item, idx) => (
                    <Button key={idx} label={item} onClick={handleButtonClick} />
                ))}
            </div>
        </div>
    );
}

export default Calculator;
