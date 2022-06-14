const almacen = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}]

const bebidas = [{ id: 1,  producto: "Fernet", precio: 700 },
   {  id: 2,  producto: "Coca", precio: 200 },
   {  id: 3,  producto: "Cerveza"  , precio: 250},
   {  id: 4,  producto: "Jugo" , precio: 150}]

   const lista = almacen.concat(bebidas)

   const agregar = [prompt("ingrese un producto")]
   agregar.push("otro producto")

   console.log(lista,agregar)


