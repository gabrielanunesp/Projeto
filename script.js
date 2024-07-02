
var textInput = document.querySelector("textarea#input-texto");
var output = document.querySelector("div.background-output");

function criptografar() {
  var texto = textInput.value;

  if (validar(texto)) {
    var resultCripto = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    console.log(resultCripto);
    output.innerHTML =
      '<textarea readonly id="output-texto"></textarea>' +
      '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
    document.querySelector("textarea#output-texto").textContent = resultCripto;
  } else {
    alert("Texto não permitido");
  }
}

function descriptografar() {
  var texto = textInput.value;

  if (validar(texto)) {
    var resultDescripto = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    output.innerHTML =
      '<textarea readonly id="output-texto"></textarea>' +
      '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
    document.querySelector("textarea#output-texto").textContent =
      resultDescripto;
  } else {
    alert("Texto não permitido");
  }
}

function copiar() {
  var textoCop = document.querySelector("textarea#output-texto").value;

  navigator.clipboard
    .writeText(textoCop)
    .then(() => {
      alert("Texto copiado!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}

function validar(textoDigitado) {
  const regex = /[A-ZÀ-Ü0-9]/;

  if (regex.test(textoDigitado)) {
    return false;
  } else {
    return true;
  }
}