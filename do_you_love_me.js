const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// skala awal tombol NO
let noScale = 1;

// fungsi untuk mindahin tombol NO ke posisi random dan mengecilkannya
function moveNoButton() {
  if (!noBtn) return;

  // kalau sudah terlalu kecil → hilang total
  if (noScale <= 0.1) {
    noScale = 0;
    noBtn.style.transform = "scale(0)";
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
    return;
  }

  const padding = 16; // jarak dari pinggir layar
  const maxX = window.innerWidth - noBtn.offsetWidth - padding * 2;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding * 2;

  const newX = padding + Math.random() * maxX;
  const newY = padding + Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  // kecilkan sedikit tiap dipicu
  noScale -= 0.07;                // ubah angka ini kalau mau lebih cepat / lambat mengecil
  if (noScale < 0.1) noScale = 0.1;

  noBtn.style.transform = `scale(${noScale})`;
  noBtn.style.opacity = String(noScale);
}

// desktop: hover / mendekat
noBtn.addEventListener("pointerenter", (e) => {
  e.preventDefault();
  moveNoButton();
});

// mobile & desktop: klik / tap
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  e.stopPropagation();
  moveNoButton();
});

// TOMBOL YES
yesBtn.addEventListener("click", () => {
  if (questionContainer) questionContainer.style.display = "none";
  if (heartLoader) heartLoader.style.display = "flex";

  setTimeout(() => {
    if (heartLoader) heartLoader.style.display = "none";
    if (resultContainer) resultContainer.style.display = "block";
    if (gifResult && typeof gifResult.play === "function") {
      gifResult.play();
    }
  }, 2000);
});
