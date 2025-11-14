const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// pastikan NO jadi posisi fixed biar bisa lari ke seluruh layar
noBtn.style.position = "fixed";

// scale awal tombol NO
let noScale = 1;

// fungsi untuk mindahin tombol NO ke posisi random
function moveNoButton() {
  // kalau sudah terlalu kecil -> hilang
  if (noScale <= 0.2) {
    noBtn.style.transform = "scale(0)";
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
    return;
  }

  const padding = 16; // jarak dari pinggir layar
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const newX = padding + Math.random() * maxX;
  const newY = padding + Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  // kecilkan dikit setiap kali dikejar
  noScale -= 0.12;
  if (noScale < 0.2) noScale = 0.2;

  noBtn.style.transform = `scale(${noScale})`;
  noBtn.style.opacity = String(noScale);
}

// desktop: hover
noBtn.addEventListener("mouseover", moveNoButton);

// mobile: tap
noBtn.addEventListener("click", (e) => {
  e.preventDefault(); // biar gak dianggap klik biasa di iOS
  moveNoButton();
});
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// TOMBOL YES
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "flex";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    if (gifResult && typeof gifResult.play === "function") {
      gifResult.play();
    }
  }, 2000);
});
