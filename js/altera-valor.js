const v1 = document.querySelector("#n1");
const v2 = document.querySelector("#n2");
const v3 = document.querySelector("#n3");
const v4 = document.querySelector("#n4");

let opcaoMl = 0;

function calculaMl(precoRequisitado) {
  if (precoRequisitado == "preco1") {
    if (opcaoMl == 0) {
      return 17.88;
    } else if (opcaoMl == 1) {
      return 32.62;
    } else if (opcaoMl == 2) {
      return 54.49;
    } else if (opcaoMl == 3) {
      return 83.23;
    }
  } else if (precoRequisitado == "preco2") {
    if (opcaoMl == 0) {
      return 30.05;
    } else if (opcaoMl == 1) {
      return 64.08;
    } else if (opcaoMl == 2) {
      return 71.09;
    } else if (opcaoMl == 3) {
      return 102.65;
    }
  } else if (precoRequisitado == "preco3") {
    if (opcaoMl == 0) {
      return 18.32;
    } else if (opcaoMl == 1) {
      return 35.32;
    } else if (opcaoMl == 2) {
      return 58.45;
    } else if (opcaoMl == 3) {
      return 91.87;
    }
  } else if (precoRequisitado == "preco4") {
    if (opcaoMl == 0) {
      return 3.27;
    } else if (opcaoMl == 1) {
      return 11.78;
    } else if (opcaoMl == 2) {
      return 19.48;
    } else if (opcaoMl == 3) {
      return 30.06;
    }
  }
}

let p1atual = document.getElementById("preco1");
let p2atual = document.getElementById("preco2");
let p3atual = document.getElementById("preco3");
let p4atual = document.getElementById("preco4");

v1.addEventListener("click", function () {
  opcaoMl = 0;
  atualizaPreco();
});

v2.addEventListener("click", function () {
  opcaoMl = 1;
  atualizaPreco();
});

v3.addEventListener("click", function () {
  opcaoMl = 2;
  atualizaPreco();
});

v4.addEventListener("click", function () {
  opcaoMl = 3;
  atualizaPreco();
});

const btnSoma = document.querySelector("#mais");
const btnMenos = document.querySelector("#menos");
let qtd = 1;

btnSoma.addEventListener("click", function () {
  qtd += 1;
  document.getElementById("num").innerHTML = qtd;

  atualizaPreco();
});

btnMenos.addEventListener("click", function () {
  if (qtd > 1) qtd -= 1;

  document.getElementById("num").innerHTML = qtd;
  atualizaPreco();
});

function atualizaPreco() {
  p1atual.innerHTML = `R$ ${(qtd * calculaMl("preco1")).toFixed(2)}`;
  p2atual.innerHTML = `R$ ${(qtd * calculaMl("preco2")).toFixed(2)}`;
  p3atual.innerHTML = `R$ ${(qtd * calculaMl("preco3")).toFixed(2)}`;
  p4atual.innerHTML = `${(qtd * calculaMl("preco4")).toFixed(2)}`;
}
