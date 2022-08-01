let ingreso = prompt(
    "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente \n\nPara salir ingrese SALIR"
  );
  if (ingreso == "SALIR") alert("Gracias, que tengas un buen día");
  
  while (ingreso != "SALIR") {
    switch (ingreso) {
      case "1":
        alert("Seleccionaste Café, que lo disfrutes");
        break;
      case "2":
        alert("Seleccionaste Café con leche, que lo disfrutes");
        break;
      case "3":
        alert("Seleccionaste Té, que lo disfrutes");
        break;
      case "4":
        alert("Seleccionaste Té con leche, que lo disfrutes");
        break;
      case "5":
        alert("Seleccionaste Agua caliente");
        break;
  
      default:
        alert("Opción no válida");
        break;
    }
    ingreso = prompt(
      "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente \n\nPara salir ingrese SALIR"
    );
    if (ingreso == "SALIR") alert("Gracias, que tengas un buen día");
  }