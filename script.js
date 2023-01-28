const numberList = document.querySelector(".number-list");
const btnSubmit = document.querySelector(".btn-submit");
const card = document.querySelector(".card-container");
const thanksCard = document.querySelector(".thanks-container");
const thanksRating = document.querySelector(".thanks-rating");

let selectedNumber = undefined;

// Remove active number state when clicking somewhere on the page
document.addEventListener("click", function (event) {
  if (!event.target.matches(".number")) {
    numberList
      .querySelectorAll(".active-number")
      .forEach((e) => e.classList.remove("active-number"));
    selectedNumber = undefined;
  }
});

// Add active number state when clicking on a number
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

// Alert if no number is selected, otherwise show thank you page with selected number
btnSubmit.addEventListener("click", function () {
  if (!selectedNumber) alert("Please select a number");
  if (selectedNumber) {
    card.classList.add("hidden");
    thanksCard.classList.remove("hidden");
  }

  thanksRating.textContent = `You selected ${selectedNumber} out of 5`;
});
