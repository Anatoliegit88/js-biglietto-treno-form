const userNameInput = document.getElementById("user-name");
const userKmInput = document.getElementById("user-distance");
const userAgeInput = document.getElementById("user-age");
const button = document.getElementById("submit");

//ELEMENTI HTML OUTPUT
const title = document.querySelector("h3");
const ticket = document.getElementById("ticket");
const passengerName = document.getElementById("description-name");
const offerApp = document.getElementById("description-offer");
const cab = document.getElementById("description-cab");
const cp = document.getElementById("description-cp");
const price = document.getElementById("description-price");

// SUL CLICK GENERA
//PRELIEVO DEI DATI
button.addEventListener("click", function () {
  const userName = userNameInput.value;
  const userKm = parseInt(userKmInput.value);
  const userAge = userAgeInput.value;

  //IL CALCOLO
  const basePrice = userKm * 0.21;
  let finalPrice = basePrice;
  let offer = "No Discount";
  if (userAge < 18) {
    finalPrice = basePrice - (basePrice * 20) / 100;
    offer = "Under 18";
  } else if (userAge >= 65) {
    finalPrice = basePrice - (basePrice * 40) / 100;
    offer = "Over 65";
  }

  //GENERA NR. CARROZZA
  const cabNum = Math.floor(Math.random() * 10) + 1;
  //GENERA CP
  const cpCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

  //OUTPUT
  const title = document.querySelector("h3");
  title.classList.remove("hidden");
  const ticket = document.getElementById("ticket");
  ticket.classList.remove("hidden");
  passengerName.innerHTML = userName;
  offerApp.innerHTML = offer;
  cab.innerHTML = cabNum;
  cp.innerHTML = cpCode;
  price.innerHTML = `${finalPrice.toFixed(2)} €`;
  title.innerHTML = `THE PRICE OF YOUR TICKET IS ${finalPrice.toFixed(
    2
  )} EURO!`;
});
