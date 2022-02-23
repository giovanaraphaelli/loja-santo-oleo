const btnSoma = document.querySelector("#mais");
const btnMenos = document.querySelector("#menos");
let mudaNum = 1;

btnSoma.addEventListener("click", function () {
  document.getElementById("num").innerHTML = mudaNum += 1;
});

btnMenos.addEventListener("click", function () {
  if (mudaNum > 0) {
    document.getElementById("num").innerHTML = mudaNum -= 1;
  }
});
