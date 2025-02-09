import "./style.css";

import { getCars, deleteCar, createCar } from "./api";

const $form = document.querySelector('[data-js="form"]');

renderTable();

function renderTable() {
  getCars().then(populateTable);
}

function handleDeleteCar(plate) {
  return async () => {
    await deleteCar(plate);
    renderTable();
  };
}

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const $errorEl = $form.querySelector('[data-js="error"]');
  const formElements = [...event.target.elements];

  const cardData = formElements.reduce((acc, formElement) => {
    const { name: key, value } = formElement;

    acc[key] = value;

    if (key === "year") {
      acc[key] = Number(value);
    }

    return acc;
  }, {});

  $errorEl.textContent = "";

  createCar(cardData)
    .then(renderTable)
    .catch((error) => {
      $errorEl.textContent = error.message;
    });
});

export function populateTable(cars) {
  const $table = document.querySelector('[data-js="table"]');
  const fragment = document.createDocumentFragment();

  $table.innerHTML = "";

  if (cars.length === 0) {
    const $tr = document.createElement("tr");
    const $td = document.createElement("td");

    $td.textContent = "Nenhum carro encontrado";
    $td.setAttribute("colspan", 5);

    $tr.appendChild($td);
    $table.appendChild($tr);

    return;
  }

  cars.forEach((car) => {
    const $tr = document.createElement("tr");

    const $tdImage = document.createElement("td");
    const $tdModel = document.createElement("td");
    const $tdYear = document.createElement("td");
    const $tdPlate = document.createElement("td");
    const $tdColor = document.createElement("td");
    const $tdDelete = document.createElement("td");

    $tdDelete.appendChild(createButton(handleDeleteCar(car.plate)));

    $tdImage.appendChild(createImage(car.image));
    $tdColor.appendChild(createColor(car.color));

    $tdModel.textContent = car.brandModel;
    $tdYear.textContent = car.year;
    $tdPlate.textContent = car.plate;

    $tr.appendChild($tdImage);
    $tr.appendChild($tdModel);
    $tr.appendChild($tdYear);
    $tr.appendChild($tdPlate);
    $tr.appendChild($tdColor);
    $tr.appendChild($tdDelete);

    fragment.appendChild($tr);
  });

  $table.appendChild(fragment);
}

function createImage(src) {
  const $image = document.createElement("img");

  $image.src = src;
  $image.width = 100;

  return $image;
}

function createColor(color) {
  const $div = document.createElement("div");

  $div.style = `
    width: 100px;
    height: 100px;
    background-color: ${color};
    margin: 0 auto;
  `;

  return $div;
}

function createButton(listener) {
  const $button = document.createElement("button");

  $button.textContent = "Excluir";
  $button.addEventListener("click", listener);

  return $button;
}
