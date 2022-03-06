const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countDownDate = '';

// Set Date Input minimum with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countDownDate = e.srcElement[1].value;
  console.log(countdownTitle, countDownDate);
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
