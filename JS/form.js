const form = document.querySelector('[data-js="form"]');
const message = document.getElementById("your-question");
const counter = document.getElementById("your-answer");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const card = document.createElement("section");
  card.classList.add("question-card");
  document.body.append(card);

  const img = document.createElement("img");
  img.classList.add("question-card__bookmark");
  img.setAttribute("src", "./img/bookmark.png");
  card.append(img);

  const h2 = document.createElement("h2");
  h2.textContent = "Question";
  card.append(h2);

  const questionHeading = document.createElement("p");

  const button = document.createElement("button");

  const div = document.createElement("div");

  questionHeading.textContent = data["your-question"];
  button.textContent = data["your-answer"];

  button.classList.add("question-card__button");
  questionHeading.classList.add("question-card__answer");
  div.classList.add("question-card__tags");

  card.append(questionHeading);
  card.append(button);
});

message.addEventListener("input", function () {
  const messageLenght = message.value.lenght;
  // counter.textContent = `${messageLenght} characters left`;
});
