const form = document.querySelector('[data-js="form"]');
const message = document.getElementById("your-question");
const counter = document.getElementById("your-answer");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  //Card
  const card = document.createElement("section");
  card.classList.add("question-card");
  document.body.append(card);

  //Bookmark
  const img = document.createElement("img");
  img.classList.add("question-card__bookmark");
  img.setAttribute("src", "./img/bookmark.png");
  card.append(img);

  //h2
  const h2 = document.createElement("h2");
  h2.textContent = "Question";
  card.append(h2);

  //the question
  const questionHeading = document.createElement("p");
  questionHeading.textContent = data["your-question"];
  card.append(questionHeading);

  //Answer
  const button = document.createElement("button");
  button.classList.add("question-card__button");
  button.textContent = data["your-answer"]; //What the fuck??
  card.append(button);

  //Hashtag
  const div = document.createElement("div");
  div.classList.add("question-card__tags");
  div.setAttribute("div", "question-card__hashtag");
  card.append(div);
});

message.addEventListener("input", function () {
  const messageLenght = message.value.lenght;
  // counter.textContent = `${messageLenght} characters left`;
});
