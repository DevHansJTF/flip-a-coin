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
  }, 300);

  img.addEventListener(
    "animationend",
    function () {
      img.classList.remove("flip");
    },
    { once: true }
  );

  if (coinSide === 1 && side === "heads") {
    document.querySelector("h1").innerHTML = "Heads. You win!";
  } else if (coinSide === 1 && side === "tails") {
    document.querySelector("h1").innerHTML = "Heads. You lost!";
  } else if (coinSide === 2 && side === "tails") {
    document.querySelector("h1").innerHTML = "Tails. You win!";
  } else {
    document.querySelector("h1").innerHTML = "Tails. You lost!";
  }
}
