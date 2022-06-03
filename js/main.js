let ingreso = prompt(
    "Escoja un genero \n rock \n pop \n cumbia \n reggaeton \n electro\n\n Para finalizar ingrese SALIR"
  );
  if (ingreso == "SALIR") alert("Genial, buenos gustos! saludos");
  
  while (ingreso != "SALIR") {
    switch (ingreso) {
      case "rock":
        alert("excelente gusto!");
        break;
      case "pop":
        alert("bien, buena musica");
        break;
      case "cumbia":
        alert("algo movida va bien!");
        break;
      case "reggaeton":
        alert("epa, es la que va");
        break;
      case "electro":
        alert("excelente");
        break;
  
      default:
        alert("mm no conozco ese genero");
        break;
    }
    ingreso = prompt(
      "Escoja un genero \n rock \n pop \n cumbia \n reggaeton \n electro\n\n Para finalizar ingrese SALIR"
    );
    if (ingreso == "SALIR") alert("Genial, buenos gustos! saludos");
  }