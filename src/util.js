export const formatNumber = (number) => (number < 10 ? `0${number}` : number);
export const formatTime = (time) => {
    let centisecond = time % 100;
    let second = Math.floor(time / 100) % 60;
    let minute = Math.floor(time / 6000);

    return `${formatNumber(minute)}:${formatNumber(second)}.${formatNumber(
        centisecond
    )}`;
};
