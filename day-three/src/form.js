import { formatName } from "./format-name";

// Exercise 01

const $nameInput = document.querySelector('[data-js="name-input"]');

$nameInput.addEventListener("input", (event) => {
  const { value } = event.target;

  if (!value) return;

  $nameInput.value = formatName(value);
});
