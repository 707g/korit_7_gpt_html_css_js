function clockRun() {
    const padClock = document.querySelector(".pad-clock");
    setInterval(() => {
        const now = new Date();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const ampm = nowHours >= 12 ? "오후" : "오전";
        const nowClockText = `${ampm} ${nowHours}:${nowMinutes}`;
        padClock.innerHTML = nowClockText;
    }, 1000);
}

function currentDate() {
    const padDate = document.querySelector(".pad-date");
    const week = new Array("일", "월", "화", "수", "목", "금", "토")
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const dayName = week[now.getDay()];
    const nowDateText = `${month}월 ${day}일 ${dayName}요일`;
    padDate.innerHTML = nowDateText;
}

clockRun();
currentDate();

