const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const buttonContainer = document.querySelector(".button-container");

// scale awal tombol NO
let noScale = 1;

// TOMBOL NO: kabur + mengecil tiap di-hover
noBtn.addEventListener("mouseover", () => {
  // kalau sudah terlalu kecil, hilangkan sekalian
  if (noScale <= 0.2) {
    noBtn.style.transform = "scale(0)";
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none"; // nggak bisa disentuh lagi
    return;
  }

  const area = buttonContainer.getBoundingClientRect();

  const maxX = area.width - noBtn.offsetWidth;
  const maxY = area.height - noBtn.offsetHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  // posisi relatif terhadap container
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  // kecilkan dikit setiap hover
  noScale -= 0.12; // semakin besar → semakin cepat hilang
  if (noScale < 0.2) noScale = 0.2;

  noBtn.style.transform = `scale(${noScale})`;
  noBtn.style.opacity = String(noScale); // makin kecil makin transparan
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
