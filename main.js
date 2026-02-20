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
  "Jjamppong"
];

const recommendBtn = document.getElementById("recommend-btn");
const recommendationDiv = document.getElementById("recommendation");

recommendBtn.addEventListener("click", () => {
  const recommendations = [];
  while (recommendations.length < 2) {
    const randomIndex = Math.floor(Math.random() * lunchMenus.length);
    const randomMenu = lunchMenus[randomIndex];
    if (!recommendations.includes(randomMenu)) {
      recommendations.push(randomMenu);
    }
  }
  recommendationDiv.innerHTML = `<p>${recommendations[0]}</p><p>${recommendations[1]}</p>`;
});