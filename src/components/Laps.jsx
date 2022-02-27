import { memo } from 'react';

const formatString = (num) => (num < 10 ? '0' + num : num);

const formatTime = (centisecond) => {
    let formattedString = '';
    const min = parseInt(centisecond / 6000);
    const sec = parseInt((centisecond - 6000 * min) / 100);
    const centisec = centisecond % 100;
    formattedString = `${formatString(min)}:${formatString(sec)}.${formatString(
        centisec
    )}`;
    return formattedString;
};

const Laps = ({ laps }) => {
    const lapTimeArr = laps.reduce((acc, cur) => [...acc, cur[1]], []);
    const maxIdx = lapTimeArr.lastIndexOf(Math.max(...lapTimeArr));
    const minIdx = lapTimeArr.lastIndexOf(Math.min(...lapTimeArr));

    const minMaxStyle = (idx) => {
        if (laps.length < 2) return;
        if (idx === maxIdx) {
            return 'text-red-600';
        }
        if (idx === minIdx) {
            return 'text-green-600';
        }
        return '';
    };

    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul id="laps">
                {laps?.map(([lapCount, lapTime], idx) => {
                    return (
                        <li
                            className={`flex justify-between py-2 px-3 border-b-2 ${minMaxStyle(
                                idx
                            )}`}
                            key={lapCount}
                        >
                            <span>랩 {lapCount}</span>
                            <span>{formatTime(lapTime)}</span>
                        </li>
                    );
                })}
            </ul>
        </article>
    );
};

export default memo(Laps);
