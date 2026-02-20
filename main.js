const lunchMenus = [
  "Kimchi Jjigae",
  "Doenjang Jjigae",
  "Bibimbap",
  "Bulgogi",
  "Japchae",
  "Tteokbokki",
  "Ramyeon",
  "Kimbap",
  "Jjajangmyeon",
  "Jjamppong",
  "Sundubu Jjigae",
  "Tonkatsu",
  "Salmon Poke",
  "Fried Chicken"
];

const recommendBtn = document.getElementById("recommend-btn");
const recommendationDiv = document.getElementById("recommendation");
const historyList = document.getElementById("history-list");

let history = [];

function updateHistoryUI() {
  historyList.innerHTML = history
    .map(item => `<li>${item.join(", ")}</li>`)
    .reverse()
    .slice(0, 5) // Show last 5
    .join("");
}

recommendBtn.addEventListener("click", () => {
  const recommendations = [];
  const availableMenus = [...lunchMenus];
  
  while (recommendations.length < 2) {
    const randomIndex = Math.floor(Math.random() * availableMenus.length);
    const randomMenu = availableMenus.splice(randomIndex, 1)[0];
    recommendations.push(randomMenu);
  }

  recommendationDiv.innerHTML = `
    <div class="result-card">
      <span class="menu-item">${recommendations[0]}</span>
      <span class="divider">&</span>
      <span class="menu-item">${recommendations[1]}</span>
    </div>
  `;

  // Add to history
  history.push(recommendations);
  updateHistoryUI();
});
