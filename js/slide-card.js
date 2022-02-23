const btnRight = document.querySelector("#right");
const btnLeft = document.querySelector("#left");
const wrapperCard = document.querySelector(".wrapper-card");
let pixels = 200;

btnRight.addEventListener("click", function () {
  pixels = pixels + 200;
  wrapperCard.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener("click", function () {
  pixels = pixels - 200;
  wrapperCard.style = `transform: translateX(${pixels}px)`;
});
