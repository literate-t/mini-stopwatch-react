import React from 'react';
import { formatTime } from '../util';

const Laps = ({ laps }) => {
    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul id="laps">
                {laps.map((lap) => (
                    <li
                        key={lap[0]}
                        className="flex justify-between py-2 px-3 border-b-2"
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
