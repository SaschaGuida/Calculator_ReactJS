import React from 'react';

function Display({ value }) {
    return (
        <input
            type="text"
            value={value}
            readOnly
            className="mb-4 w-full h-30 text-4xl text-right border rounded p-4"
        />
    );
}

export default Display;
