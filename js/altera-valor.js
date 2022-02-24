const v1 = document.querySelector("#n1");
const v2 = document.querySelector("#n2");
const v3 = document.querySelector("#n3");
const v4 = document.querySelector("#n4");

let v1p1 = 17.88;
let v1p2 = 30.05;
let v1p3 = 18.32;
let v1p4 = 3.27;

let v2p1 = 32.62;
let v2p2 = 64.08;
let v2p3 = 35.32;
let v2p4 = 11.78;

let v3p1 = 54.49;
let v3p2 = 71.09;
let v3p3 = 58.45;
let v3p4 = 19.48;

let v4p1 = 83.23;
let v4p2 = 102.65;
let v4p3 = 91.87;
let v4p4 = 30.06;

let p1atual = document.getElementById("preco1");
let p2atual = document.getElementById("preco2");
let p3atual = document.getElementById("preco3");
let p4atual = document.getElementById("preco4");

v1.addEventListener("click", function () {
  p1atual.innerHTML = `R$ ${v1p1}`;
  p2atual.innerHTML = `R$ ${v1p2}`;
  p3atual.innerHTML = `R$ ${v1p3}`;
  p4atual.innerHTML = `3x R$ ${v1p4}`;
});

v2.addEventListener("click", function () {
  p1atual.innerHTML = `R$ ${v2p1}`;
  p2atual.innerHTML = `R$ ${v2p2}`;
  p3atual.innerHTML = `R$ ${v2p3}`;
  p4atual.innerHTML = `3x R$ ${v2p4}`;
});

v3.addEventListener("click", function () {
  p1atual.innerHTML = `R$ ${v3p1}`;
  p2atual.innerHTML = `R$ ${v3p2}`;
  p3atual.innerHTML = `R$ ${v3p3}`;
  p4atual.innerHTML = `3x R$ ${v3p4}`;
});

v4.addEventListener("click", function () {
  p1atual.innerHTML = `R$ ${v4p1}`;
  p2atual.innerHTML = `R$ ${v4p2}`;
  p3atual.innerHTML = `R$ ${v4p3}`;
  p4atual.innerHTML = `3x R$ ${v4p4}`;
});

const btnSoma = document.querySelector("#mais");
const btnMenos = document.querySelector("#menos");
let mudaNum = 1;

btnSoma.addEventListener("click", function () {
  let novoMudaNum = (document.getElementById("num").innerHTML = mudaNum += 1);
  p1atual.innerHTML = p1atual *= novoMudaNum;
  p2atual.innerHTML = p2atual *= novoMudaNum;
  p3atual.innerHTML = p3atual *= novoMudaNum;
  p4atual.innerHTML = p4atual *= novoMudaNum;
});

btnMenos.addEventListener("click", function () {
  if (mudaNum > 1) {
    document.getElementById("num").innerHTML = mudaNum -= 1;
  }
});
