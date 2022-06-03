let ingreso = prompt(
    "Escoja un genero \n rock solo \n electro \n pop \n cumbia \n reggaeton\n\n para salir ingrese SALIR"
  );
  if (ingreso == "SALIR") alert("Gracias, que tengas un buen día");
  
  while (ingreso != "SALIR") {
    switch (ingreso) {
      case "rock":
        alert("ecelente gusto");
        break;
      case "electro":
        alert("mm no es mi tipo pero excelente");
        break;
      case "cumbia":
        alert("te bailas todo seguro");
        break;
      case "pop":
        alert("bien romanticon");
        break;
      case "reggaeton":
        alert("epa con todo");
        break;
  
      default:
        alert("mm ese genero no lo conozco");
        break;
    }
    ingreso = prompt(
      "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente"
    );
    if (ingreso == "SALIR") alert("Excelente gustos! saludos");
  }