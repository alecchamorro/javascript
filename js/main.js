let $entrada = prompt("Escoja un GENERO:\n -Rock\n -Electro\n -Reggaeton\n Para salir escribir SALIR");
while ($entrada !="SALIR")
    switch ($entrada) {
        case "Rock":
            alert ("excelente, buen gusto")
            break;
        case "Electro":
            alert("No es mi tipo, pero bien")
            break;
            case "Reggaeton":
                alert ("epa");
                break;
        default:
            alert("Mmm opcion invalida")
            break;
     }
    if (ingreso == "SALIR") alert("Gracias, que tengas un buen día");


let ingreso = prompt(
    "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente"
  );
  if (ingreso == "SALIR") alert("Gracias, que tengas un buen día");