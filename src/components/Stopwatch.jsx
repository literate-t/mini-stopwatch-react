import React, { useEffect } from 'react';
import useTimer from '../hooks/useTimer';
import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

// ok
// 하지만 unmount 될 떄 핸들러를 제거할 방법이 없음
//document.addEventListener('keydown', (e) => console.log('keydown'));
const Stopwatch = () => {
    const { start, pause, centisecond, isRunning, createLap, reset, laps } =
        useTimer();

    useEffect(() => {
        const keyInputHandler = (e) => {
            let fn;
            switch (e.code) {
                case 'KeyS':
                    fn = isRunning ? pause : start;
                    break;
                case 'KeyL':
                    fn = isRunning ? createLap : reset;
                    break;
                default:
                    return;
            }
            fn();
        };
        document.addEventListener('keydown', keyInputHandler);
        return () => {
            document.removeEventListener('keydown', keyInputHandler);
        };
    }, [isRunning, start, pause, createLap, reset]);
    // 핸들러 중복 등록 안 되므로 문제 없을 것
    // 하지만 unmount 될 떄 핸들러를 제거할 방법이 없음
    // document.addEventListener('keydown', hi);
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
