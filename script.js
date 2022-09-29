let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



document.querySelector(".bnt").addEventListener("click", function () {
  const guessingNumber = Number(document.querySelector(".input_class").value);
  console.log(guessingNumber, typeof guessingNumber);

  if (!guessingNumber) {
    document.querySelector(".display").textContent =
      "Введіть будь-ласка число від 1 до 20";
  } else if (guessingNumber === secretNumber && score > 1) {
    document.querySelector(".display").textContent = "Правильно";
    document.querySelector("body").style.background = "linear-gradient(to bottom right, blue, green)";
    document.querySelector(".secretNumber").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".result_display").textContent = highscore;
  } else if (guessingNumber < secretNumber && score > 1) {
    document.querySelector(".display").textContent = "Мало";
    score = score - 1;
    document.querySelector(".span_score").textContent = score;
  } else if (guessingNumber > secretNumber && score > 1) {
    document.querySelector(".display").textContent = "Забагато";
    score = score - 1;
    document.querySelector(".span_score").textContent = score;
  } else if (score > 0) {
    score = score - 1;
    document.querySelector(".span_score").textContent = score;
    document.querySelector(".display").textContent = "Game Over";
  }
});

document.querySelector(".rejekt").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".secretNumber").textContent = "???";
  document.querySelector("body").style.background = "linear-gradient(to bottom right, blue, rgb(111, 126, 25))";
  document.querySelector(".display").textContent = "";
  document.querySelector(".span_score").textContent = score;
  document.querySelector(".input_class").value = "";
});

