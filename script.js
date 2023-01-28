const numberList = document.querySelector(".number-list");
const btnSubmit = document.querySelector(".btn-submit");
const card = document.querySelector(".card-container");
const thanksCard = document.querySelector(".thanks-container");
const thanksRating = document.querySelector(".thanks-rating");

let selectedNumber = undefined;

document.addEventListener("click", function (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".number"))
    numberList
      .querySelectorAll(".active-number")
      .forEach((e) => e.classList.remove("active-number"));
});

numberList.addEventListener("click", function (e) {
  selectedNumber = e.target.getAttribute("data-rating");
  const number = e.target;

  if (e.target.classList.contains("number")) {
    numberList
      .querySelectorAll(".active-number")
      .forEach((e) => e.classList.remove("active-number"));
    number.classList.add("active-number");
  }
});

btnSubmit.addEventListener("click", function () {
  if (!selectedNumber) alert("Please select a number");
  if (selectedNumber) {
    card.classList.add("hidden");
    thanksCard.classList.remove("hidden");
  }

  thanksRating.textContent = `You selected ${selectedNumber} out of 5`;
});
