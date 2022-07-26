import React from 'react';
import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

const Stopwatch = () => {
    return (
        <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
            <Timer />
            <div className="flex justify-between text-white pb-8 text-sm select-none">
                <Button label="리셋" color="bg-gray-600" keyCode="L" />
                <Button label="시작" color="bg-green-600" keyCode="S" />
            </div>
            <Laps />
        </section>
    );
};

export default Stopwatch;
