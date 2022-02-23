const v1 = document.querySelector("#n1");
const v2 = document.querySelector("#n2");
const v3 = document.querySelector("#n3");
const v4 = document.querySelector("#n4");

v1.addEventListener("click", function () {
  document.getElementById("preco1").innerHTML = "R$ 17,88";
  document.getElementById("preco2").innerHTML = "R$ 30,00";
  document.getElementById("preco3").innerHTML = "R$ 18,32";
});

v2.addEventListener("click", function () {
  document.getElementById("preco1").innerHTML = "R$ 32,88";
  document.getElementById("preco2").innerHTML = "R$64,00";
  document.getElementById("preco3").innerHTML = "R$ 35,32";
});

v3.addEventListener("click", function () {
  document.getElementById("preco1").innerHTML = "R$ 54,88";
  document.getElementById("preco2").innerHTML = "R$ 71,00";
  document.getElementById("preco3").innerHTML = "R$ 58,45";
});

v4.addEventListener("click", function () {
  document.getElementById("preco1").innerHTML = "R$ 83,88";
  document.getElementById("preco2").innerHTML = "R$ 102,00";
  document.getElementById("preco3").innerHTML = "R$ 91,80";
});
