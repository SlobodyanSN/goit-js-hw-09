import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const input = document.querySelector(`#datetime-picker`);
const startBtn = document.querySelector(`[data-start]`);
const dateDays = document.querySelector(`[data-days]`);
const dateHours = document.querySelector(`[data-hours]`);
const dateMinutes = document.querySelector(`[data-minutes]`);
const dateSeconds = document.querySelector(`[data-seconds]`);

console.dir(input);

startBtn.setAttribute(`disabled`, true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {   
     
      if (Date.now() > selectedDates[0].getTime()) {
        startBtn.setAttribute(`disabled`, true);
        
        Notiflix.Notify.failure('Please choose a date in the future');
        
        return
      }
      startBtn.removeAttribute(`disabled`)
    },
  };

  flatpickr(input, options);

  startBtn.addEventListener('click', onStart);

function onStart() {
  
    const targetTime = new Date(input.value).getTime();
    if (targetTime - Date.now() < 1000) {
       startBtn.setAttribute(`disabled`, true);
       return
    }
  
   const intervalId = setInterval(() => {
    if (targetTime - Date.now() < 900) {
     clearInterval(intervalId);
   
    }
    
    updateClock(convertMs(targetTime - Date.now()));
  }, 1000);

  if (intervalId) {
    
    startBtn.setAttribute(`disabled`, true);
    input.disabled = true;
  return
  };
 
};
function updateClock({days, hours, minutes, seconds}) {

dateDays.textContent = (days);
dateHours.textContent = (hours);
dateMinutes.textContent = (minutes);
dateSeconds.textContent = (seconds);
}

function pad(value) {
  return String(value).padStart(2, `0`);
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

