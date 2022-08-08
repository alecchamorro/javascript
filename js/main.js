function saludar() {
  alert("Calculadora");
}

saludar();

function sumar(x, y) {
  const resultado = x + y;
  // alert(`El resultado de ${x}+${y} es ${resultado}`); pd Cierto que el return retorna sin necesidad de un alert xd
  return resultado;
   }

function restar(x, y) {
  const resultado = x - y;
  // alert(`El resultado de ${x}-${y} es ${resultado}`);
  return resultado;
}
function multiplicar(x, y) {
  const resultado = x * y;
  // alert(`El resultado de ${x}*${y} es ${resultado}`);
  return resultado;
}
function dividir(x, y) {
  const resultado = x / y;
  // alert(`El resultado de ${x}/${y} es ${resultado}`);
  return resultado
}

const operacion = Number(prompt(`Bienvenideo, que operacion queres realizar?
1 - Sumar
2 - Restar
3 - Multiplicar
4 - Dividir`));

const numero1 = Number(prompt("Ingresa el primer número"));
const numero2 = Number(prompt("Ingresa el segundo número"));

switch (operacion) {
  case 1:
    const suma = sumar(numero1, numero2);
    // alert(`El resultado de ${numero1}+${numero2} es ${suma}`);
    break;
  case 2:
    const resta = restar(numero1, numero2);
  return resta
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

