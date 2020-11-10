$("p").each(function(indice,elemento){
    //En cada elemento p escribimos el texto
    $(elemento).text("Párrafo número: " + indice);
  });