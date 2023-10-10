const form = document.querySelector('[data-js="form"]');
const message = document.getElementById("your-question");
const counter = document.getElementById("your-answer");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

message.addEventListener("input", function () {
  const messageLenght = message.value.lenght;
  counter.textContent = `${messageLenght} characters left`;
});
