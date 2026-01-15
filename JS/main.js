const randomAlertsContainer = document.getElementById("random-alerts");
const proceedBtn = document.getElementById("proceedBtn");

// NÚMERO RANDOM ENTRE 10 Y 15
const alertCount = Math.floor(Math.random() * 11) + 25;

// CREAR ALERTS RANDOM
for (let i = 0; i < alertCount; i++) {
  const alert = document.createElement("div");
  alert.classList.add("alert");

  alert.innerHTML = `
    <div class="alert-header">
      <span>Warning</span>
      <span class="x">✕</span>
    </div>
    <div class="alert-body">
      <p>Unexpected system behavior detected.</p>
    </div>
    <div class="alert-footer">
      <button>OK</button>
    </div>
  `;

  // POSICIÓN RANDOM
  const x = Math.random() * (window.innerWidth - 260);
  const y = Math.random() * (window.innerHeight - 160);

  alert.style.left = `${x}px`;
  alert.style.top = `${y}px`;

  randomAlertsContainer.appendChild(alert);
}

// BOTÓN PROCEED → PORTFOLIO
proceedBtn.addEventListener("click", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    window.location.href = "portfolio.html";
  }, 600);
});
