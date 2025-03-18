let nombres = [];
let input = document.getElementById('amigo');

function agregarAmigo() {
  let nombre = input.value;

  if (nombre.trim().length === 0) {
    alert("Por favor, inserte un nombre.");
  } else {
    nombres.push(nombre);
    input.value = '';
  }


  /*
  alert(`El nombre ingresado fue: ${nombre} ` + typeof (nombre))

  for (let i = 0; i < nombres.length; i++) {
    const element = nombres[i];
    alert(element);
  }
    */
}
