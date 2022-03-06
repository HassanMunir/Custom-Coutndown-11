const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElement = document.querySelectorAll('span');

let countdownTitle = '';
let countDownDate = '';
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input minimum with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Populate Countdown / Complete UI
function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log('distance', distance);

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  console.log(days, hours, minutes, seconds);

  // Populating Countdown
  countdownElTitle.textContent = `${countdownTitle}`;
  timeElement[0].textContent = `${days}`;
  timeElement[1].textContent = `${hours}`;
  timeElement[2].textContent = `${minutes}`;
  timeElement[3].textContent = `${seconds}`;

  // Hide Input
  inputContainer.hidden = true;
  // Show Countdown
  countdownEl.hidden = false;
}

// Take values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countDownDate = e.srcElement[1].value;
  console.log(countdownTitle, countDownDate);
  // Get Number version of current date and update DOM
  countdownValue = new Date(countDownDate).getTime();
  console.log('countdown value:', countdownValue);
  updateDOM();
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
