const bookmark = document.querySelector('[data-js="toggle-bookmark"]');
console.log(bookmark);
bookmark.addEventListener("click", (event) => {
  if (event.target.src.includes("filled")) {
    event.target.src = "img/bookmark.png";
  } else {
    event.target.src = "img/bookmark_filled.png";
  }
});

const answerButton = 