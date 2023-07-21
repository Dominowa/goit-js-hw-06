let counterValue = 0;
const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const valueSpan = document.getElementById("value");
function updateCounterValue(value) {
  counterValue = value;
  valueSpan.textContent = counterValue;
}
decrementButton.addEventListener("click", () => {
  updateCounterValue(counterValue - 1);
});

incrementButton.addEventListener("click", () => {
  updateCounterValue(counterValue + 1);
});

updateCounterValue(counterValue);
