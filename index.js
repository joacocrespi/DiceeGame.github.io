function getRandom1() {
  return Math.floor(Math.random() * 6) + 1;
}
var randomNumber1 = getRandom1();
document
  .querySelector(".img")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
//////////////////////////

function getRandom2() {
  return Math.floor(Math.random() * 6) + 1;
}
var randomNumber2 = getRandom2();
document
  .querySelectorAll(".img")[1]
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");
/////////////////////////////////////

if (randomNumber1 > randomNumber2) {
  document.querySelector(".heading").innerHTML = "Player 1 wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector(".heading").innerHTML = "It`s a Draw!";
} else {
  document.querySelector(".heading").innerHTML = "Player 2 wins!";
}
