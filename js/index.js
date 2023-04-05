console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", function () {
  const firstValue = Number(firstInput.value) * Number(secondInput.value);
  result.textContent = firstValue;
});

secondInput.addEventListener("input", function () {
  const secondValue = Number(firstInput.value) * Number(secondInput.value);
  result.textContent = secondValue;
});
