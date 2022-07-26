import React from 'react';

const Button = ({ label, keyCode, color, onClick }) => {
    return (
        <button
            className={`${color} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md`}
            onClick={onClick}
        >
            <p id="lap-reset-btn-label" className="text-base">
                {label}
            </p>
            <p className="text-xs">{keyCode}</p>
        </button>
    );
};

export default React.memo(Button);
