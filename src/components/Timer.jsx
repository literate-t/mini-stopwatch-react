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

const Timer = ({ centisecond }) => {
    return (
        <h1
            id="timer"
            className="text-5xl font-extrabold pb-8 text-center tracking-tighter break-words"
        >
            {formatTime(centisecond)}
        </h1>
    );
};

export default Timer;
