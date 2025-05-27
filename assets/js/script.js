// Optional jQuery form submission script
$('#registerForm').on('submit', function (e) {
  e.preventDefault();
  alert('✅ Registration submitted!');
});

// এখানে আপনার চ্যালেঞ্জ শুরুর সময় দিন
// উদাহরণ: "2025-06-01T18:00:00"
const challengeStart = new Date("2025-06-01T18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = challengeStart - now;

  let days = 0, hours = 0, minutes = 0, seconds = 0;

  if (distance > 0) {
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  if (distance <= 0) {
    clearInterval(timerInterval);
    document.getElementById('days').textContent = 0;
    document.getElementById('hours').textContent = 0;
    document.getElementById('minutes').textContent = 0;
    document.getElementById('seconds').textContent = 0;
  }
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);

