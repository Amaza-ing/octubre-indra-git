const themeToggle = document.querySelector("#theme-toggle");

/**
 * Toggles the page theme and starts the page vibration.
 */
function handleThemeToggle() {
  vibratePage();

  const isDark = document.body.classList.toggle("dark");

  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = isDark
    ? "Activar modo claro"
    : "Activar modo oscuro";
}

/**
 * Starts the brief page vibration animation.
 */
function vibratePage() {
  document.body.classList.remove("page-vibrating");
  requestAnimationFrame(startPageVibration);
}

/**
 * Applies the vibration class on the next animation frame.
 */
function startPageVibration() {
  document.body.classList.add("page-vibrating");
}

const clockHands = {
  hour: document.querySelector("#clock-hour"),
  minute: document.querySelector("#clock-minute"),
  second: document.querySelector("#clock-second"),
};

/**
 * Updates the clock hands to match the current time.
 */
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  clockHands.hour.style.transform =
    `translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg)`;
  clockHands.minute.style.transform =
    `translateX(-50%) rotate(${minutes * 6 + seconds * 0.1}deg)`;
  clockHands.second.style.transform =
    `translateX(-50%) rotate(${seconds * 6}deg)`;
}

themeToggle.addEventListener("click", handleThemeToggle);

updateClock();
setInterval(updateClock, 1000);
