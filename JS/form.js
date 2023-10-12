const form = document.querySelector('[data-js="form"]');
const message = document.getElementById("your-question");
const counter = document.getElementById("your-answer");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const card = document.createElement("section");

  const questionHeading = document.createElement("p");
  questionHeading.textContent = data["your-question"];

  card.append(questionHeading);
  card.classList.add("question-card");

  document.body.append(card, bookmark);
});

message.addEventListener("input", function () {
  const messageLenght = message.value.lenght;
  // counter.textContent = `${messageLenght} characters left`;
});
