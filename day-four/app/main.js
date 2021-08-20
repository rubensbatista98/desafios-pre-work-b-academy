import "./style.css";

import { populateTable } from "./utils/populate-table";

const CARS_API_URL = "http://localhost:3333/cars";

async function getCars() {
  const response = await fetch(CARS_API_URL);
  const data = await response.json();

  return data;
}

getCars().then(populateTable);
