console.log('TIMER');

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let selectedDate = null;
let timerId = null;

startBtn.disable = true;

flatpickr(input, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        selectedDate = selectedDates[0];
        if (selectedDate <= new Date()) {
            startBtn.disable = true;
            iziToast.error({
                maessage: "Please choose a date in the future",
                position: 'topRight',
            });
        } else {
            startBtn.disable = false;
        }
    },
});

