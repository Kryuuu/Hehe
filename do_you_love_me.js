const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const buttonContainer = document.querySelector(".button-container");

// TOMBOL NO KABUR DALAM CARD
noBtn.addEventListener("mouseover", () => {
  const area = buttonContainer.getBoundingClientRect();

  const maxX = area.width - noBtn.offsetWidth;
  const maxY = area.height - noBtn.offsetHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// TOMBOL YES
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "flex";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 2000);
});
