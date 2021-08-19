const $form = document.querySelector('[data-js="cars-form"]');
const $table = document.querySelector('[data-js="table"]');

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { elements } = event.target;

  const $tr = document.createElement("tr");

  [...elements].forEach(($element) => {
    const $td = document.createElement("td");
    $td.textContent = $element.value;

    $tr.appendChild($td);
  });

  $table.appendChild($tr);

  $form.reset();
  elements[0].focus();
});
