import "./style.css";

const $link = document.querySelector('[data-js="link"]');
const $app = document.querySelector('[data-js="app"]');

$app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

$link.addEventListener("click", (event) => {
  event.preventDefault();

  const HIDE_CLASSNAME = "-hide";
  const shouldHide = $app.classList.contains(HIDE_CLASSNAME);

  if (shouldHide) {
    $app.classList.remove(HIDE_CLASSNAME);
    $link.textContent = "Esconder boas-vindas";

    return;
  }

  $app.classList.add(HIDE_CLASSNAME);
  $link.textContent = "Mostrar boas-vindas";
});
