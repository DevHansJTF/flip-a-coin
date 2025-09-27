var score = 0;
var highScore = 0;

for (var i = 0; i < 2; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var choice = this.classList[0];
    coinResult(choice);
  });
}

function coinResult(side) {
  var img = document.querySelector("img");
  var coinSide = Math.floor(Math.random() * 2) + 1;

  img.classList.add("flip");

  setTimeout(function () {
    if (coinSide === 1) {
      img.setAttribute("src", "./images/heads.svg");
    } else {
      img.setAttribute("src", "./images/tails.svg");
    }
  }, 200);

  img.addEventListener(
    "animationend",
    function () {
      img.classList.remove("flip");
    },
    { once: true }
  );

  if (coinSide === 1 && side === "heads") {
    document.querySelector("h1").innerHTML = "Heads. You win!";
    score++;
    scoreCounter();
    updatehighScore();
  } else if (coinSide === 1 && side === "tails") {
    document.querySelector("h1").innerHTML = "Heads. You lost!";
    scoreReset();
  } else if (coinSide === 2 && side === "tails") {
    document.querySelector("h1").innerHTML = "Tails. You win!";
    score++;
    scoreCounter();
    updatehighScore();
  } else {
    document.querySelector("h1").innerHTML = "Tails. You lost!";
    scoreReset();
  }
}

function scoreCounter() {
  document.querySelector(".container-score p").innerText = score;
}

function scoreReset() {
  score = 0;
  document.querySelector(".container-score p").innerText = score;
}

function updatehighScore() {
  if (score > highScore) {
    highScore = score;
    document.querySelector(".container-high-score p").innerText = highScore;
  } else {
    document.querySelector(".container-high-score p").innerText = highScore;
  }
}
