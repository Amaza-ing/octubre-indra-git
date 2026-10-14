const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = isDark
    ? "Activar modo claro"
    : "Activar modo oscuro";
});

const clockHands = {
  hour: document.querySelector("#clock-hour"),
  minute: document.querySelector("#clock-minute"),
  second: document.querySelector("#clock-second"),
};

/**
 * Actualiza la posición de las manecillas del reloj en función de la hora actual.
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

updateClock();
setInterval(updateClock, 1000);





