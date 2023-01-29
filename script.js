const numbers = document.querySelectorAll(".number");
const activeNumber = document.querySelector(".active-number");
const btnSubmit = document.querySelector(".btn-submit");
const card = document.querySelector(".card-container");
const thanksCard = document.querySelector(".thanks-container");
const thanksRating = document.querySelector(".thanks-rating");

let selectedNumber = undefined;

// Add active number state when clicking on a number
numbers.forEach((number) => {
  number.addEventListener("click", function (e) {
    // Track number to display in thank you form
    selectedNumber = e.target.getAttribute("data-rating");

    // Toggle active number state
    if (!activeNumber) {
      e.target.classList.toggle("active-number");
    }

    // Remove active state from last selected number and add active to new selected number
    if (e.target.classList.contains("active-number")) {
      numbers.forEach((e) => e.classList.remove("active-number"));
      number.classList.add("active-number");
    }
  });
});

// Remove active number state when clicking somewhere on the page
document.addEventListener("click", function (e) {
  if (!e.target.matches(".active-number")) {
    numbers.forEach((e) => e.classList.remove("active-number"));
    selectedNumber = undefined;
  }
});

// Alert if no number is selected, otherwise show thank you page with selected number
btnSubmit.addEventListener("click", function () {
  if (!selectedNumber) alert("Please select a number");
  if (selectedNumber) {
    card.classList.add("hidden");
    thanksCard.classList.remove("hidden");
  }

  // Display selected rating in thank youcard
  thanksRating.textContent = `You selected ${selectedNumber} out of 5`;
});
