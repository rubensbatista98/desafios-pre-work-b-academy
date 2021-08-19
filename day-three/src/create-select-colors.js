export function createSelectColors(colors) {
  const $select = document.createElement("select");

  $select.setAttribute("multiple", true);

  colors.forEach((color) => {
    const $option = createColorOption(color);

    $select.appendChild($option);
  });

  return $select;
}

function createColorOption(color) {
  const $option = document.createElement("option");

  $option.setAttribute("value", color);
  $option.textContent = color;

  return $option;
}
