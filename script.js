const greetingPage = document.getElementById("greeting-page");
const berandaPage = document.getElementById("beranda-page");
const clock = document.getElementById("clock");
const greetingText = document.getElementById("greeting-text");
const btnLanjut = document.getElementById("btnLanjut");

/* JAM */
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  clock.textContent = `${h}.${m}`;
}

function setGreeting() {
  const hour = new Date().getHours();
  let text = "Malam";

  if (hour >= 5 && hour < 12) text = "Pagi";
  else if (hour >= 12 && hour < 15) text = "Siang";
  else if (hour >= 15 && hour < 18) text = "Sore";

  greetingText.innerHTML = `Selamat <span class="highlight">${text}</span>`;
}

btnLanjut.addEventListener("click", () => {
  berandaPage.classList.add("active");
  greetingPage.classList.remove("active");
});

window.onload = () => {
  greetingPage.classList.add("active");
  berandaPage.classList.remove("active");
  setGreeting();
  updateClock();
  setInterval(updateClock, 1000);
};
