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

for (let i = 1; i < 10; i++) {
    
const operacion = Number(prompt(`Bienvenideo, que operacion queres realizar?
1 - Sumar
2 - Restar
3 - Multiplicar
4 - Dividir\n\nPara salir del bucle ingrese el numero 0`));


const numero1 = Number(prompt("Ingresa el primer número"));
const numero2 = Number(prompt("Ingresa el segundo número"));

switch (operacion) {
  case 1:
    sumar(numero1, numero2);
    break;
  case 2:
    restar(numero1, numero2);
    break;
  case 3:
    multiplicar(numero1, numero2);
    break;
  case 4:
    dividir(numero1, numero2);
    break;
  default:
    break;
    
}
if (operacion == 0) {
    
    alert("gracias por utilizar la app")
   break
}}



