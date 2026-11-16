const openBtn = document.getElementById("openSurprise");
const giftReveal = document.getElementById("giftReveal");
const continueBtn = document.getElementById("continueBtn");
const wishBtn = document.getElementById("wishBtn");
const wishResult = document.getElementById("wishResult");
const backTop = document.getElementById("backTop");

// Open birthday surprise
openBtn.addEventListener("click", () => {
  giftReveal.classList.remove("hidden");
  openBtn.textContent = "Opened with love 💙";
  openBtn.disabled = true;

  giftReveal.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  confettiHearts();
});

// Continue to birthday message
continueBtn.addEventListener("click", () => {
  document.getElementById("message").scrollIntoView({
    behavior: "smooth"
  });
});

// Make a wish
wishBtn.addEventListener("click", () => {
  wishResult.classList.remove("hidden");
  wishBtn.textContent = "Wish Made! ✨";
  confettiHearts();
});

// Back to top
backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Floating hearts animation
function confettiHearts() {
  const emojis = ["💙", "💗", "✨", "⭐", "💕"];

  for (let i = 0; i < 18; i++) {
    const item = document.createElement("span");

    item.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    item.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: -30px;
      font-size: ${16 + Math.random() * 18}px;
      z-index: 99;
      pointer-events: none;
      animation: fall ${3 + Math.random() * 3}s linear forwards;
    `;

    document.body.appendChild(item);

    setTimeout(() => item.remove(), 6500);
  }
}

// Birthday music
const birthdayAudio = document.getElementById("birthdayAudio");

if (birthdayAudio) {
  birthdayAudio.volume = 0.65;

  const startMusic = () => {
    if (!birthdayAudio.paused) return;

    birthdayAudio.play()
      .then(() => {
        document.removeEventListener("click", startMusic);
        document.removeEventListener("touchend", startMusic);
        document.removeEventListener("pointerdown", startMusic);
      })
      .catch((error) => {
        console.log("Music playback waiting for another interaction:", error);
      });
  };

  window.addEventListener("load", () => {
    birthdayAudio.play().catch(() => {
      console.log("Autoplay blocked. Waiting for user interaction.");
    });
  });

  document.addEventListener("click", startMusic);
  document.addEventListener("touchend", startMusic);
  document.addEventListener("pointerdown", startMusic);
}

// Falling animation
const style = document.createElement("style");

style.textContent = `
  @keyframes fall {
    to {
      transform: translateY(110vh) rotate(400deg);
      opacity: 0;
    }
  }
`;

document.head.appendChild(style);

// Doraemon's Magic Pocket

const pocketButtons = document.querySelectorAll(".pocket-choice");
const pocketResult = document.getElementById("pocketResult");

pocketButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pocketResult.textContent = button.dataset.message;
    pocketResult.classList.remove("hidden");
    confettiHearts();
  });
});
