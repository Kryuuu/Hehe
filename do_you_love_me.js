const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// =========================
//  TOMBOL "NO" KABUR 😈
// =========================

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    // batas maksimal posisi tombol biar tetap di layar
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  });
}

// =========================
//  TOMBOL "YES" 💚
// =========================

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    // sembunyiin pertanyaan
    if (questionContainer) {
      questionContainer.style.display = "none";
    }

    // munculin loader hati
    if (heartLoader) {
      heartLoader.style.display = "flex";
    }

    // setelah 3 detik, tunjukin hasil
    setTimeout(() => {
      if (heartLoader) {
        heartLoader.style.display = "none";
      }

      if (resultContainer) {
        resultContainer.style.display = "flex";
      }

      if (gifResult && typeof gifResult.play === "function") {
        gifResult.play();
      }
    }, 3000);
  });
}
