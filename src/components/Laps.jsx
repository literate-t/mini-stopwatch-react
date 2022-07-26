import React from 'react';
import { formatTime } from '../util';
// const laps = [
//     [5, 14],
//     [4, 15],
//     [3, 16],
//     [2, 13],
//     [1, 12],
// ];
let min;
let max;
const Laps = ({ laps }) => {
    // 랩 타임만 배열로 만들기
    const lapTimeArr = laps.reduce((acc, cur) => [...acc, cur[1]], []);

    // 랩 타임이 하나일 때
    if (1 === lapTimeArr.length) {
        min = lapTimeArr[0];
    } else if (2 === lapTimeArr.length) {
        // 둘일 때
        if (lapTimeArr[0] < min) {
            max = min;
            min = lapTimeArr[0];
        }
        max = lapTimeArr[0];
    } else {
        // 셋 이상
        if (lapTimeArr[0] < min) {
            min = lapTimeArr[0];
        } else if (max < lapTimeArr[0]) {
            max = lapTimeArr[0];
        }
    }

    const maxIndex = lapTimeArr.indexOf(max);
    const minIndex = lapTimeArr.indexOf(min);

    const minMaxStyle = (index) => {
        if (lapTimeArr.length < 2) return;
        if (index === maxIndex) return 'text-red-600';
        if (index === minIndex) return 'text-green-600';
    };

    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul id="laps">
                {laps.map((lap, index) => (
                    <li
                        key={lap[0]}
                        className={`flex justify-between py-2 px-3 border-b-2 ${minMaxStyle(
                            index
                        )}`}
                    >
                        <span>랩 {lap[0]}</span>
                        <span>{formatTime(lap[1])}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default React.memo(Laps);
