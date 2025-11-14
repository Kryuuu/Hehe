const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// pastikan tombol NO fixed agar bisa lompat seluruh layar
noBtn.style.position = "fixed";
noBtn.style.zIndex = "9999";

// ukuran awal tombol
let noScale = 1;

// fungsi lompat bebas
function jumpNoButton() {
  if (noScale <= 0.15) {
    noBtn.style.opacity = "0";
    noBtn.style.transform = "scale(0)";
    noBtn.style.pointerEvents = "none";
    return;
  }

  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  // kecilkan bertahap
  noScale -= 0.1;
  noBtn.style.transform = `scale(${noScale})`;
  noBtn.style.opacity = `${noScale}`;
}

// ==== EVENT UNIVERSAL (ANTI-BUG) ====

// desktop hover
noBtn.addEventListener("pointerenter", jumpNoButton);

// mobile tap
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  jumpNoButton();
});

// ==== YES BUTTON ====
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
