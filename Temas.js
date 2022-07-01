var cambiarUno =(id) =>{
    let element = document.querySelector(`#${id}`)
    element.classList.remove("temaDos")
    element.classList.add("temaUno")

}

var cambiarDos = (id) =>{
    let element = document.querySelector(`#${id}`)
    element.classList.remove("temaUno")
    element.classList.add("temaDos")
}

