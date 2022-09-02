// evento Click, sobre todos los botones creados con la clase .button
const clickbutton = document.querySelectorAll(`.button`)
// Evento creado para el carrito de compras
const tbody = document.querySelector(`.tbody`)

// Recorremos  
clickbutton.forEach(btn =>{
  btn.addEventListener (`click`,addToCarritoItem)
})

// array de objetos
let carrito = []


// funcion para capturar informacion del HTML
function addToCarritoItem(e) {
  const button = e.target // capturamos la informacion de todos los botones
  const item = button.closest(`.card`)//closest captura el contentedor mas cercano a .card, es el contenedor padre de mi producto
  const itemTitle = item.querySelector(`.card-title`).textContent;//captura el titulo del item, es la unica clase con titulo (textContent, es para obtener el contenido del queryS)
  const itemPrice = item.querySelector (`.precio`).textContent // al igual que el titulo, capturamos la clase .precio con el text content agarramos el precio y lo retornamos
  const itemImg = item.querySelector (`.card-img-top`).src //.src encuentra el contenido dentro de la etiqueta, en este caso busco retornar la imagen

// constructor
  const newItem ={
    tittle: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }
  addItemCarrito(newItem)//funcion
  
}

// pusheo al array de objetos, cada click va cargar el objeto al carrito
function addItemCarrito(newItem){

  const inputElement = tbody.getElementsByClassName(`input__elemento`)
  for (let i=0; i< carrito.length; i++){
    if(carrito[i].tittle.trim()===newItem.tittle.trim()){
      //trim va quitar todos los espacion que estan a los lados, de esta forma g quedan iguales
      carrito[i].cantidad++//cada vez que esta condicion se cumpla entonces se va sumar
      const inputValue = inputElement[i]
      inputValue.value++
      carritoTotal()
 
     return null;  //de esta forma no se va ejectutar el push ni el render, simplemente va salir de la funcion
     
    }

  }

  carrito.push(newItem)
 //cargo todo correctamente los objos al array carrito
 console.log(carrito);//array de objetos por log
  renderCarrito()

}

function renderCarrito () { //renderizar los datos en la seccion de carrito, con esta funcion busco eso
  tbody.innerHTML = `` //el tbody va decir cada vez que ejecuto esta accion va estar vacia

  carrito.map (item =>{
  const tr = document.createElement (`tr`);//creamos el tr, que se encuentra dentro del tbody
  tr.classList.add (`itemCarrito`) //al tr creado mediante classList.add le agrego la clase itemcarrito de forma dinamica, sirve para trabajar con el carro
  const content = `
  

  <th scope="row"></th>
            <td class="table__productos"><img src=${item.img} alt="" width="100px" height="100px">
              <h6 class="title">${item.tittle}</h6></td>

            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__Cantidad">
             <input type="number" min="1" value=${item.cantidad} class="input__elemento">
          
             <button class="btn btn-outline-danger delete btn btn-danget xred">x</button>
            
              </td>

  `
  //para que al agregar los objetos y los pinte en el carro en forma de tabla, desde el html traer la tabla creada

  tr.innerHTML = content //al tr le agregamos el contenido dinamico de la const content
  tbody.append(tr) //en el cuerpo del html (tbody) agregamos el contenido dinamico creado con tr.innerHTML (todo lo que esta dentro de content)

  tr.querySelector(".delete").addEventListener(`click`, removeItemCarrito)
  tr.querySelector(".input__elemento").addEventListener(`change`, sumaCantidad)
})
carritoTotal()

}
// funcion suma total
function carritoTotal(){
  let total = 0;
  const itemCartTotal = document.querySelector(`.itemCardtotal`)
  carrito.forEach((item)=>{
    const precio = Number(item.precio.replace("$",``))
    total = total + precio*item.cantidad
  
  })
  itemCartTotal.innerHTML = `total $${total}`
  addLocalStorage()

}
// boton remover item carrito
function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(`.itemCarrito`)
  const tittle = tr.querySelector(`.title`).textContent
  for(let i = 0; i<carrito.length; i ++){
    if(carrito[i].tittle.trim() === tittle.trim()){
    carrito.splice(i, 1)

  }
}

  
  tr.remove()
  desectructurar(carrito)
  carritoTotal()

}
// sumar items carrito
function sumaCantidad(e){
  const sumaInput = e.target
  const tr = sumaInput.closest(".itemCarrito")
  const tittle=tr.querySelector(`.title`).textContent
  

  carrito.forEach(item =>{
    if(item.tittle.trim()===tittle){
     sumaInput.value <1 ? (sumaInput.value = 1): sumaInput.value //OPERADOR TERNARIO
      item.cantidad = sumaInput.value
      carritoTotal()
   
    }
   

  })

  console.log(carrito)

}

  //  destructuracion
 let desectructurar= (trae) => {
       const [{tittle, precio}] = trae
       console.log(tittle, precio)
   }

// storage

function addLocalStorage(){
  localStorage.setItem(`carrito`,JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem(`carrito`))
  if(storage){
    carrito = storage
    renderCarrito()
  }
}


