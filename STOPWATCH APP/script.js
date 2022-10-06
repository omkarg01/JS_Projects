const start = document.getElementsByClassName('start')[0];
const stop = document.getElementsByClassName('stop')[0];
const reset = document.getElementsByClassName('reset')[0];
const min = document.getElementsByClassName('min')[0];
const sec = document.getElementsByClassName('sec')[0];
const msec = document.getElementsByClassName('msec')[0];

let msecCount = 0;
let secCount = 0;
let minCount = 0;

function countFunc() {
    msecCount++;
    msec.innerHTML = msecCount < 10 ? '0' + msecCount : msecCount;

    if (msecCount === 99) {
        msecCount = 0;
        secCount++;
        sec.innerHTML = secCount < 10 ? `0${secCount}` : secCount;
    }

    if (secCount === 60) {
        msecCount = 0;
        secCount = 0;
        secCount.innerHTML = secCount;
        minCount++;
        min.innerHTML = minCount < 10 ? `0${minCount}` : minCount;
    }
}

let interval;
let startFlag = false;

function startFunc() {
    if (!startFlag) {
        interval = setInterval(countFunc, 10);
        startFlag = true;
    }
}

start.addEventListener('click', startFunc);

function stopFunc() {
    if (startFlag) {
        clearInterval(interval);
        startFlag = false;
    }
}

stop.addEventListener('click', stopFunc);

function resetFunc() {
    clearInterval(interval);
    msecCount = 0;
    secCount = 0;
    minCount = 0;
    msec.innerHTML = '00';
    sec.innerHTML = '00';
    min.innerHTML = '00';
    startFlag = false;
}

reset.addEventListener('click', resetFunc);