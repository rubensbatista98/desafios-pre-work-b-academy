import "./style.css";

import { populateTable } from "./utils/populate-table";

const CARS_API_URL = "http://localhost:3333/cars";

const $form = document.querySelector('[data-js="form"]');

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
    .then(() => getCars())
    .then(populateTable)
    .catch((error) => {
      $errorEl.textContent = error.message;
    });
});

async function getCars() {
  const response = await fetch(CARS_API_URL);
  const data = await response.json();

  return data;
}

async function createCar(data) {
  try {
    const response = await fetch(CARS_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    return Promise.reject({ message: responseData.message });
  } catch (error) {
    return { message: "Tivemos um erro inesperado. Tente novamente." };
  }
}

getCars().then(populateTable);
