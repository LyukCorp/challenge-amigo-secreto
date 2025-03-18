let nombres = [];
let input = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');

function agregarAmigo() {
  let nombre = input.value;

  if (nombre.trim().length === 0) {
    alert("Por favor, inserte un nombre.");
  } else {
    nombres.push(nombre);
    limpiarInput();
    //document.getElementById("listaAmigos").innerHTML += "<li>" + nombre + "</li>";
    MostrarLista();
  }

  /*
  alert(`El nombre ingresado fue: ${nombre} ` + typeof (nombre));

  for (let i = 0; i < nombres.length; i++) {
    const element = nombres[i];
    alert(element);
  }
    */
}

function limpiarInput() {
  input.value = '';
}


function MostrarLista() {
  let nombre = input.value.trim();
  lista.innerHTML = "";

  for (let i = 0; i < nombres.length; i++) {
    let li = document.createElement('li');
    li.textContent = nombres[i];
    lista.appendChild(li);
  }
}


function sortearAmigo() {

}
