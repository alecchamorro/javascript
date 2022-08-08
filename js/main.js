function saludar() {
  alert("Calculadora");
}

saludar();



function sumar(x, y) {
    const resultado = x + y;
    return alert(`El resultado de ${x}+${y} es ${resultado}`);
   }
function restar(x, y) {
    const resultado = x - y;
    return alert(`El resultado de ${x}-${y} es ${resultado}`);
}
function multiplicar(x, y) {
    const resultado = x * y;
    return alert(`El resultado de ${x}*${y} es ${resultado}`);
}
function dividir(x, y) {
    const resultado = x / y;
    return alert(`El resultado de ${x}/${y} es ${resultado}`);
}


do{
const operacion = prompt(`Bienvenido, que operacion queres realizar?\n
1 - Sumar\n
2 - Restar\n
3 - Multiplicar\n
4 - Dividir\n`);

const numero1 = prompt("Ingresa el primer número");
const numero2 = prompt("Ingresa el segundo número");


if (operacion == "SALIR") {
    alert("gracias que tenga un buen dia");}

  else{
switch (operacion) {
  case "1":
    sumar(numero1, numero2);
    break;
  case "2":
    restar(numero1, numero2);
    break;
  case "3":
    multiplicar(numero1, numero2);
    break;
  case "4":
    dividir(numero1, numero2);
    break;
    
  default:
    break;
    
}
}
}while(operacion != "SALIR");


