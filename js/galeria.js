const imagemPrincipal = document.querySelector("#imagem-principal");
const imagem2 = document.querySelector("#img2");
const imagem1 = document.querySelector("#img1");

imagem2.addEventListener("click", function () {
  imagemPrincipal.style = "filter: grayscale(100%);";
});

imagem1.addEventListener("click", function () {
  imagemPrincipal.style = "filter: grayscale(0%);";
});
