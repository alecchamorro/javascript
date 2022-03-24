let $num1;
let $resultado=0;

while($num1 != 0){
    $num1 =Number (prompt("ingrese un numero"))
    $resultado=$resultado +$num1;

}
alert("el resultado de la suma es "+ $resultado)



let $num2= Number(prompt("ingrese un numero"));
for (let i=0; i<=$num2; i+=2){
    console.log(i);
}




let $entrada = prompt("Escoja un GENERO: rock, electro, reggaeton");
while ($entrada !="ESC"){
    switch ($entrada) {
        case "rock":
            alert ("excelente, buen gusto");
            break;
        case "electro":
            alert("No es mi tipo, pero bien")
            break;
            case "reggaeton":
                alert ("epa");
                break;
        default:
            alert("Mmm Te confundiste pa")
            break;
    }

$entrada = prompt ("Escoja un GENERO: rock, electro, reggaeton");

}