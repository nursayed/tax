
// Countdown timer for the "VIP Upgrade Expires In:" section (top timer)
const endTimeTop = new Date();
endTimeTop.setHours(endTimeTop.getHours() + 24); // Set to 24 hours from now

function updateTopCountdown() {
  const now = new Date().getTime();
  const distance = endTimeTop - now;

  if (distance < 0) {
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

updateTopCountdown(); // Initial call
setInterval(updateTopCountdown, 1000); // Update every second


// Countdown timer for the footer bar
const endTimeFooter = new Date();
endTimeFooter.setHours(endTimeFooter.getHours() + 23); // 23 hours from now
endTimeFooter.setMinutes(endTimeFooter.getMinutes() + 45); // 45 minutes from now
endTimeFooter.setSeconds(endTimeFooter.getSeconds() + 30); // 30 seconds from now

const updateFooterTimer = () => {
  const now = new Date();
  const diff = endTimeFooter - now;

  if (diff <= 0) {
    document.getElementById('timerr').innerText = "00:00:00";
    return;
  }

  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

  document.getElementById('timerr').innerText = `${hours}:${minutes}:${seconds}`;
};

updateFooterTimer(); // Initial call
setInterval(updateFooterTimer, 1000); // Update every second