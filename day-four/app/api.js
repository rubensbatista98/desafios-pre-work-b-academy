const CARS_API_URL = "http://localhost:3333/cars";

export async function getCars() {
  const response = await fetch(CARS_API_URL);
  const data = await response.json();

  return data;
}

export async function createCar(data) {
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

export async function deleteCar(plate) {
  await fetch(CARS_API_URL, {
    method: "DELETE",
    body: JSON.stringify({ plate }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
