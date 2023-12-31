import React from 'react';

const CircularStatus = ({ text, circleColor }) => {
    return (
        <div className={`text-xs text-slate-800	dark:text-slate-500	 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-4 w-auto h-auto`}>
            <div className="flex flex-row items-center">
                <div className={`w-2 h-2 z-10 rounded-full ${circleColor}`}></div>
                <div className="flex flex-col items-center w-full pl-2">{text}</div>
            </div>
        </div>
    );
};

export default CircularStatus;
