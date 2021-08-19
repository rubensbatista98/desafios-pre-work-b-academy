import { formatName } from "./format-name";
import { createSelectColors } from "./create-select-colors";
import { rerenderColorsSection } from "./rerender-colors-section";

const $form = document.querySelector('[data-js="form"]');
const $nameInput = document.querySelector('[data-js="name-input"]');

// Exercise 01

$nameInput.addEventListener("input", (event) => {
  const { value } = event.target;

  if (!value) return;

  $nameInput.value = formatName(value);
});

// Exercise 02
// Acho que tá bem complexo. Desculpa rs!

const colors = {
  pink: "#FF3366",
  black: "#000",
  blue: "#11b5d6",
  green: "#1ed611",
  red: "#d61111",
};

const arrOfColors = Object.keys(colors);
const $select = createSelectColors(arrOfColors);

$select.addEventListener("change", (event) => {
  const selectedColors = [...event.target.selectedOptions].map(
    ($option) => $option.value
  );

  rerenderColorsSection({ colors, selectedColors });
});

$form.appendChild($select);
