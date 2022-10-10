const userDistanceKm = document.getElementById("user-distance");
console.log(userDistanceKm);
const userAge = document.getElementById("user-age");
const button = document.getElementById("submit");
const basePrice = 0.21;

const title = document.querySelector("h1");

button.addEventListener("click", function () {
  let priceTicket;
  if (userAge.value < 18) {
    priceTicket = userDistanceKm.value * basePrice * 0.8;
  } else if (userAge >= 65) {
    priceTicket = userDistanceKm.value * basePrice * 0.6;
  } else {
    priceTicket = userDistanceKm.value * basePrice;
  }

  console.log(userDistanceKm.value, userAge.value);
  title.innerHTML = `The PRICE of your ticket is ${priceTicket.toFixed(
    2
  )} EURO!`;
});
