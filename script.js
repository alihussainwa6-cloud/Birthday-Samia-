let candlesLeft = 3;

function showScreen(screenName) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenName).classList.add("active");

  if (screenName === "final") {
    createConfetti();
  }
}


function blow(candle) {

  if (candle.classList.contains("blown")) {
    return;
  }

  candle.classList.add("blown");
  candlesLeft--;

  if (candlesLeft === 0) {

    document.getElementById("candleText").innerHTML =
      "✨ Wish made! Happy Birthday Samia! 🎉";

    createConfetti();
  }
}


function openGift() {

  document.getElementById("secret").classList.remove("hidden");

  document.getElementById("giftText").innerHTML =
    "Your surprise is open! 💖";

  createConfetti();
}


function createConfetti() {

  for (let i = 0; i < 80; i++) {

    let piece = document.createElement("div");

    piece.style.position = "fixed";
    piece.style.width = "9px";
    piece.style.height = "14px";
    piece.style.background =
      `hsl(${Math.random() * 360}, 90%, 60%)`;

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.top = "-20px";

    piece.style.zIndex = "100";

    piece.style.borderRadius = "3px";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    piece.style.transition =
      `top ${2 + Math.random() * 3}s linear,
       transform ${2 + Math.random() * 3}s linear`;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.style.top = "110vh";
      piece.style.transform =
        `rotate(${Math.random() * 1000}deg)`;
    }, 50);

    setTimeout(() => {
      piece.remove();
    }, 5000);
  }
}