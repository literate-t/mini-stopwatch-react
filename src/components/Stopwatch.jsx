import React from 'react';
import useTimer from '../hooks/useTimer';
import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

const Stopwatch = () => {
    const { start, pause, centisecond, isRunning, createLap, reset, laps } =
        useTimer();

    return (
        <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
            <Timer centisecond={centisecond} />
            <div className="flex justify-between text-white pb-8 text-sm select-none">
                <Button
                    label={isRunning ? '랩' : '리셋'}
                    color="bg-gray-600"
                    keyCode="L"
                    onClick={isRunning ? createLap : reset}
                />
                <Button
                    label={isRunning ? '중단' : '시작'}
                    color={isRunning ? 'bg-red-600' : 'bg-green-600'}
                    keyCode="S"
                    onClick={isRunning ? pause : start}
                />
            </div>
            <Laps laps={laps} />
        </section>
    );
};

export default React.memo(Stopwatch);
