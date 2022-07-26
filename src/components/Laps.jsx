import React from 'react';

const Laps = () => {
    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul id="laps">
                {/* 추가되는 lap은 아래의 HTML 코드 형식을 사용해 추가해주세요.  */}
                {/* <li className="flex justify-between py-2 px-3 border-b-2">
<span>랩 5</span>
<span>00:00.28</span>
</li> */}
            </ul>
        </article>
    );
};

export default Laps;
