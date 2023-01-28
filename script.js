const numberList = document.querySelector(".number-list");
const btnSubmit = document.querySelector(".btn-submit");
const card = document.querySelector(".card-container");
const thanksCard = document.querySelector(".thanks-container");

let selectedNumber = undefined;

numberList.addEventListener("click", function (e) {
  const number = e.target;
  selectedNumber = e.target.getAttribute("data-rating");

  number.parentElement
    .querySelectorAll(".active-number")
    .forEach((e) => e.classList.remove("active-number"));

  number.classList.add("active-number");
  numberList.classList.remove("active-number");
});

btnSubmit.addEventListener("click", function () {
  if (!selectedNumber) alert("Please select a number");
  if (selectedNumber) {
    card.classList.add("hidden");
    thanksCard.classList.remove("hidden");
  }
});
