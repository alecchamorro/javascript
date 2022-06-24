const titulos = document.getElementsByClassName("titulos");

titulos[0].innerText = "JS";

ingreso = document.querySelector("#ingreso"),
btnGuardar = document.querySelector("#btnGuardar")
mensaje = document.querySelector("#mensaje")


btnGuardar.addEventListener("click", () => {
    mensaje.innerText = ingreso.value;
    
})
