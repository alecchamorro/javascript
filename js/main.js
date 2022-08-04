function saludar() {
  alert("Calculadora");
}

saludar();

function sumar(x = 0, y = 0) 
  return x + y;
  console.log("Esto no se ejecuta");
function restar(x, y) {
  const resultado = x - y;
  alert(`El resultado de ${x}-${y} es ${resultado}`);
  return resultado;
}
function multiplicar(x, y) {
  const resultado = x * y;
  alert(`El resultado de ${x}*${y} es ${resultado}`);
}
function dividir(x, y) {
  const resultado = x / y;
  alert(`El resultado de ${x}/${y} es ${resultado}`);
}

const operacion = Number(prompt(`Bienvenideo, que operacion queres realizar?\n
1 - Sumar \n
2 - Restar\n
3 - Multiplicar\n
4 - Dividir\n`));

const numero1 = Number(prompt("Ingresa el primer número"));
const numero2 = Number(prompt("Ingresa el segundo número"));

switch (operacion) {
  case 1:
    const suma = sumar(numero1, numero2);
    alert(`El resultado de ${numero1}+${numero2} es ${suma}`);
    break;
  case 2:
    const resta = restar(numero1, numero2);
    console.log(resta);
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