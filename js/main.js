
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

const productos = [{id: 1, producto: "cerveza", precio: 300 },
                  { id: 2,  producto: "fernet", precio: 1300 },
                  { id: 3,  producto: "smirnoff", precio: 980 },
                  { id: 4,  producto: "absolut", precio: 2500 },];

let carriño = []
do {

//    let descuento = 0;
    let carro =(Number(prompt("productos en oferta:\n\n1 - cerveza  $300\n2 - fernet  $1300\n3 - smirnoff  $980\n4 - absolut  $2500\ningrese el id del producto")));
     
    const carrito = productos.find(producto => producto.id === carro);
    carriño.push(carrito)
    
    // var sumatotal = carriño.map(item => item.precio).reduce((prev, curr) => prev + curr, descuento);

} while (confirm("¿Desea seguir agregando productos?"));

let voucher = -200
const cupon= prompt("ingresa el cupon de descuento").toLowerCase() 


if (cupon == "cupon200") {

    var sumatotal = carriño.map(item => item.precio).reduce((prev, curr) => prev + curr, voucher);
    alert("¡CUPON VALIDO, TIENE $200 DE DESCUENTO!\n\nEl costa total de su pedido es de $"+ sumatotal)


} else {

    var sumatotal = carriño.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
    alert("¡CUPON INVALIDO!\n\nEl costa total de su pedido es de $"+ sumatotal)
}

// alert("El costa total de su pedido es de $"+ sumatotal)
console.log(carriño);

/* 
 let voucher = -200
    const cupon= prompt("ingresa el cupon de descuento").toLowerCase() 


    if (cupon == "cupon200") {
   
        var sumatotal = carriño.map(item => item.precio).reduce((prev, curr) => prev + curr, voucher);
        alert("¡CUPON VALIDO, TIENE $200 DE DESCUENTO!\n\nEl costa total de su pedido es de $"+ sumatotal)


    } else {

        var sumatotal = carriño.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
        alert("¡CUPON INVALIDO!\n\nEl costa total de su pedido es de $"+ sumatotal)
    }
*/



