
/*
const deseaContinuar =true


do {
    deseaContinuar
    alert("Bienvenido")
} while (confirm("queres seguir siendo bienvenido?"));{
    alert("perfecto, pusiste que no, no queres continuuar")
}
// si descuento = CUPON, ENTONCES aplica el reduce a la suma total, SI NO alert, cupon invalido, aplica igual la formula  PERO con el reduce a 0

*/
alert("ingresa CUPON200 al finalizar la compra para tener $200 de descuento")

const productos = [{id: 1, producto: "cerveza", nombre:"Cerveza Miller 500mm", precio: 300 },
                  { id: 2,  producto: "fernet", nombre:"Fernet Branca 750mm", precio: 1300 },
                  { id: 3,  producto: "smirnoff", nombre:"Vodka Smirnoff 700mm", precio: 980 },
                  { id: 4,  producto: "absolut", nombre:"Vodka Absolut importado 750mm", precio: 2500 },];

let carriño = []
do {

//    let descuento = 0;
    let carro =(Number(prompt("productos en oferta:\n\n1 - cerveza  $300\n2 - fernet  $1300\n3 - smirnoff  $980\n4 - absolut  $2500\ningrese el id del producto")));
     
    const carrito = productos.find(producto => producto.id === carro);
    carriño.push(carrito)

    // const divs = document.getElementsByTagName("div"); //no lo usamos ya que no apuntamos a algo ya creado en html

} while (confirm("¿Desea seguir agregando productos?"));
for (const producto of carriño) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<div class="card" 
    <h3> ID: ${producto.producto}</h3>
    <p>  Producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b>
    </div>`;
    document.body.appendChild(contenedor);
}

let voucher = -200
const cupon= prompt("ingresa el cupon de descuento").toLowerCase() 


if (cupon == "cupon200") {
// cuando aplica el cupon valido
    const sumatotal = carriño.map(item => item.precio).reduce((prev, curr) => prev + curr, voucher);
    alert("¡CUPON VALIDO, TIENE $200 DE DESCUENTO!\n\nEl costa total de su pedido es de $"+ sumatotal)
    let precioDescuento = document.createElement("div")

    precioDescuento.innerHTML = `<div class="precio" 
    <h2> Costo TOTAL $ ${sumatotal} CUPON200 le genero un descuento de $200, gracias por aplicarlo</h2>
    `
    document.body.appendChild(precioDescuento);

} else {
// Cuando aplica el cupon invalido
    const sumatotal = carriño.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
    alert("¡CUPON INVALIDO!\n\nEl costa total de su pedido es de $"+ sumatotal)

    let precioDescuento = document.createElement("div")
    precioDescuento.innerHTML = `<div class="precio" 
    <h2> Costo TOTAL $ ${sumatotal} Gracias por la compra</h2>
    `
    document.body.appendChild(precioDescuento);
}


console.log(carriño);


