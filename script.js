const userNameInput = document.getElementById("user-name");
const userDistanceInput = document.getElementById("user-distance");
const userAgeInput = document.getElementById("user-age");
const button = document.getElementById("submit");

//ELEMENTI HTML OUTPUT
const title = document.querySelector("h2");
const ticket = getElementById("ticket");
const passengerName = document.getElementById("description-name");
const offer = document.getElementById("description-offer");
const cab = document.getElementById("description-cab");
const cp = document.getElementById("description-cp");
const price = document.getElementById("description-price");

// SUL CLICK GENERA
//PRELIEVO DEI DATI
button.addEventListener("click", function () {
  const userName = userNameInput.value;
  const userDistance = userDistanceInput.value;
  const userAge = userAgeInput.value;

  //IL CALCOLO
  let kmPrice = 0.21;
  if (userAge.value < 18) {
    priceTicket = userDistance.value * kmPrice * 0.8;
  } else if (userAge >= 65) {
    priceTicket = userDistance.value * kmPrice * 0.6;
  } else {
    priceTicket = userDistance.value * kmPrice;
  }

  //GENERA NR. CARROZZA
  const cabNum = Math.floor(Math.random() * 10) + 1;
  //GENERA CP
  const cpCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

  //OUTPUT
  const ticket = document.getElementById("ticket");
  ticket.classList.remove("hidden");
  ticket.classList.add("show");
  passengerName.innerHTML = userName;
  offer.innerHTML = userAge;
  cab.innerHTML = cabNum;
  cp.innerHTML = cpCode;
  price.innerHTML = kmPrice.toFixed(2);
  title.innerHTML = `THE PRICE OF YOUR TICKET IS ${priceTicket.toFixed(
    2
  )} EURO!`;
});
