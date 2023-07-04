//Declaración de Variables
const formulario = document.getElementById("area-formulario");
const inputs = document.querySelectorAll("#area-formulario input");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("correo");

//Expresiones Regulares
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
};

function validarFormulario(e) {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;

    case "apellido":
      validarCampo(expresiones.nombre, e.target, "apellido");
      break;

    case "correo":
      validarCampo(expresiones.correo, e.target, "correo");
      break;
  }
   
}

function validarCampo(expresion, input, campo) {
  if (expresion.test(input.value) && isNaN(input.value)) {
    document
      .getElementById(`area-${campo}`)
      .classList.remove("formulario-incorrecto");
    document
      .getElementById(`area-${campo}`)
      .classList.add("formulario-correcto");
    document
      .querySelector(`#area-${campo} .mensaje-error`)
      .classList.remove("error");
  } else {
    document
      .getElementById(`area-${campo}`)
      .classList.add("formulario-incorrecto");
    document
      .getElementById(`area-${campo}`)
      .classList.remove("formulario-correcto");
    document
      .querySelector(`#area-${campo} .mensaje-error`)
      .classList.add("error");
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

