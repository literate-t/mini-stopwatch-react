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
    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul id="laps">
                {laps?.map((lap) => {
                    const [lapCount, lapTime] = lap;
                    return (
                        <li
                            className="flex justify-between py-2 px-3 border-b-2"
                            key={lap[0]}
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

export default Laps;
