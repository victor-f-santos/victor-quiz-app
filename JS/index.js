const bookmark = document.querySelector('[data-js="toggle-bookmark"]');
bookmark.addEventListener("click", (event) => {
  if (event.target.src.includes("filled")) {
    event.target.src = "img/bookmark.png";
  } else {
    event.target.src = "img/bookmark_filled.png";
  }
});

const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

button.addEventListener("click", () => {
  answer.classList.toggle("question-card__hidden");
  //   button.textContent = "Hide answer";

  if (button.textContent === "Hide Answer") {
    button.textContent = "Answer";
  } else {
    button.textContent = "Hide Answer";
  }
});
