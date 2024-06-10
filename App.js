let firstcard = 11;
let secondcard = 9;
let sum = firstcard + secondcard;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  cardsEl.textContent = "cards:" + firstcard + " " + secondcard;
  sumEl.textContent = "Sum:" + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
  }

  messageEl.textContent = message;
}
function newCard() {

  let card = 1;
  sum = sum + card;
  startGame();
}
