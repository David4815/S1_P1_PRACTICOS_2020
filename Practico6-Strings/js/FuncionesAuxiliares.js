function eliminarCaracteres(texto, cEliminar) {
    let textoNuevo = "";
    for (let i = 0; i < texto.length; i++) {
      if (texto.charAt(i) !== cEliminar) {
        textoNuevo += texto.charAt(i);
      }
    }
    return textoNuevo;
  }

  function estaEntre(numero, menor, mayor) {
    let resultado = false;
    if (numero >= menor && numero <= mayor) {
        resultado = true;
    }
    return resultado;
}

function invertirTexto(texto) {
  let nuevoTexto = "";
  for (let i = texto.length -1; i >= 0; i--) {
      nuevoTexto += texto.charAt(i);
  }
  return nuevoTexto;
}

function eliminarCaracteres(texto, cEliminar) {
  let textoNuevo = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) !== cEliminar) {
      textoNuevo += texto.charAt(i);
    }
  }
  return textoNuevo;
}

function cambiarLetra(texto,letra){
  let nuevoTexto="";
  for(let i = 0; i <texto.length;i++){
      if(texto.charAt(i)===letra){
          nuevoTexto +="*";
      }else{
    nuevoTexto+=texto.charAt(i);  
  }
}
return nuevoTexto;
}