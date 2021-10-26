// ACTIVIDAD CLASE 2

const $edad= Number(prompt("ingrese tu edad"));
const $user= prompt("ingrese Hola");
const $number= Number(prompt("ingrese un numero mayor a 1000"));


if($user=="Hola") {
    console.log("bienvenido " + $user);
}

else{
    console.log("bienvenido usuario invitado")
}

if($edad<10) {
    console.log("no podes ingresar, sos menor")}

else if($edad>50) {
    console.log("acceso permitido")
}

else {
    console.log("entre 10 y 50")
}

if($number>1000){
    console.log("numero mayor a 1000")
}

console.log("Hola chicxs")


// USUARIOS Y CLAVES

// admin: admin:admin123
// user1: carlos:carlos123
// user2: david:David123
// user3: ale:


// const $usuario_valido = ($user=="carlos" && $pass=="carlos123") || ($user=="david" && $pass=="david123") || ($user=="ale" && $pass=="ale123")
// const $admin=($user=="admin" && $pass=="admin123")

// const $user= prompt("ingrese usuario");
// const $pass= prompt("ingrese clave");


// if ($admin) {
//     console.log("bienvenido dios");
//  } else if ($usuario_valido) {
//         console.log("bienvenido "+$user);
// } else{
//     console.log("datos incorrectos");
//     }