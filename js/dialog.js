/* const openButton = document.querySelector("#open-button");
openButton.addEventListener("click", openDialog);

function openDialog() {
  document.querySelector("#dialog_1").showModal();
}

const closeButton = document.querySelector("#close-button");
closeButton.addEventListener("click", closeDialog);

function closeDialog() {
  document.querySelector("#dialog_1").close();
} */

const articles = document.querySelectorAll(".news_card");
const rotate = document.querySelector("#rotate");

articles.forEach(function (article) {
  formArticle(article);
});

function formArticle(article) {
  const openButton = article.querySelector(".open-button");
  const dialog = article.querySelector("dialog");
  const closeButton = article.querySelector(".close-button");

  openButton.addEventListener("click", viewArticle);
  function viewArticle() {
    dialog.querySelector("h3").scrollIntoView();
    dialog.showModal();
  }

  closeButton.addEventListener("click", closeArticle);
  function closeArticle() {
    dialog.close();
  }
}

const card1 = document.querySelector("#card1");

card1.addEventListener("mouseover", startZoomIn);
card1.addEventListener("mouseout", pauseZoomIn);

card1.classList.add("pauseAnimation");

function startZoomIn() {
  console.log("mouseover");
  card1.classList.remove("pauseAnimation");
}

function pauseZoomIn() {
  console.log("mouseout");
  card1.classList.add("pauseAnimation");
}

const card2 = document.querySelector("#card2");

card2.addEventListener("mouseover", startMove);
card2.addEventListener("mouseout", pauseMove);

card2.classList.add("pauseAnimation");

function startMove() {
  card2.classList.remove("pauseAnimation");
  console.log("mouseover");
}

function pauseMove() {
  card2.classList.add("pauseAnimation");
  console.log("mouseout");
}

const css = document.querySelector("#lightmode");
console.log(css);

const modeButton = document.querySelector("#colorMode");

modeButton.addEventListener("click", changeMode);

function changeMode() {
  if (css.href.includes("dark")) {
    css.href = "css/custom.css";
    console.log("change to darkmode");
  } else {
    css.href = "css/custom-dark.css";
    console.log("change to lightmode");
  }
}
