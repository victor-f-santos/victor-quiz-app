const bookmark = document.querySelector('[data-js="toggle-bookmark"]');
bookmark.addEventListener("click", (event) => {
  if (event.target.src.includes("filled")) {
    event.target.src = "img/bookmark.png";
  } else {
    event.target.src = "img/bookmark_filled.png";
  }
});
