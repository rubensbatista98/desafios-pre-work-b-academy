const $colorsSection = document.querySelector('[data-js="colors-section"]');

export function rerenderColorsSection({ colors, selectedColors }) {
  const fragment = document.createDocumentFragment();

  selectedColors.forEach((color) => {
    const $div = createColorDiv(colors[color]);

    fragment.appendChild($div);
  });

  $colorsSection.innerHTML = "";
  $colorsSection.appendChild(fragment);
}

function createColorDiv(color) {
  const $div = document.createElement("div");

  $div.setAttribute(
    "style",
    `
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: ${color};
    margin: 0 5px;
  `
  );

  return $div;
}
