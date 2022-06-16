// admin: admin:Admin123
// user1: carlos:Carlos123
// user2: david:David123
// user3: ale:Ale123

const user= prompt("ingrese usuario");
const pass= prompt("ingrese clave")

const usuario_valido = (user=="carlos" && pass==="Carlos123") || (user=="david" && pass==="David123") || (user=="ale" && pass==="Ale123")
const admin=(user=="admin" && pass==="Admin123")
if (admin) {
   alert("bienvenido dios");

   // registros de gaston en cafeteria
   const usuarios = [
      { id: 1, nombre: "admin", totales: 15000},
      { id: 2, nombre: "david", totales: 18000},
      { id: 3, nombre: "carlos", totales: 14000},
      { id: 4, nombre: "ale", totales: 13000},
  ]
  
  const buscado = usuarios.find(producto => producto.id ===3)
  const resultado2 = usuarios.filter((el) => el.totales <= 14000)
  
  console.log(buscado)

  console.log(resultado2)


} else if (usuario_valido) {
       alert("bienvenido "+user);
   
       let ingreso = prompt(
         "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente \n\n Para salir ingrese SALIR"
       );
       if (ingreso == "SALIR") alert("Gracias, que tengas un buen día");
       while (ingreso != "SALIR" && ingreso !="salir" && "Salir") {
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
           "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente"
         );
         if (ingreso == "SALIR") alert("Gracias, que tengas un buen día");
       } 

} else{
   alert("datos incorrectos");
   } 


