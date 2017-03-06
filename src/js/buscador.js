function appendClass(element, newClass){
  if (element.className.length == 0) {
    element.className = newClass;
  }
  else if (element.className.indexOf(newClass) < 0) {
    element.className += ' ' + newClass;
  }
}


function click(){
  var btnBuscador = document.querySelector("#buscador");
  var containerBuscador = document.querySelector(".containerBuscador");
  btnBuscador.onclick = function(e){
    appendClass(containerBuscador, "desplegado")
  }
}

click();


