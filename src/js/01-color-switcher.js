const btnStart = document.querySelector(`button[data-start]`);
const btnStop = document.querySelector(`button[data-stop]`);
const bgn = document.querySelector(`body`);

btnStop.disabled = true;

let timerId = null;

changeBgn();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeBgn() {bgn.style.background = getRandomHexColor()};

btnStart.addEventListener(`click`, (onStartBtnClick));

function onStartBtnClick () {
btnStart.disabled = true;
btnStop.disabled = false;

timerId = setInterval(changeBgn, 1000);

};

btnStop.addEventListener(`click`, (onStopBtnClick));

function onStopBtnClick() {
clearInterval(timerId)

    btnStart.disabled = false;
    btnStop.disabled = true;
};