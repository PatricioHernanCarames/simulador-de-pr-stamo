// Clases
function Cliente(name,surname,age,monto,cuotas = 12) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.monto = monto;
    this.cuotas = cuotas;
}


// Elementos del DOM
let inputs = document.querySelectorAll("input");
let buttons = document.querySelectorAll("button");
let alerta = document.querySelector(".alert");


// General
buttons[1].addEventListener("click",(e) => {
    alerta.classList.toggle("alertAnim");

    e.preventDefault();
    let cliente = new Cliente(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value)
    sessionStorage.prestamo = JSON.stringify(cliente);
    showAlerta(cliente);
})

buttons[0].addEventListener("click",()=>{
    alerta.classList.add("alertAnim");
    alerta.style.opacity = 0;
})




// Funciones


function dangerAlert() {

    if(inputs[2].value < 18) {

    alerta.classList.add("alertDanger");
        
}else{
    
    function showAlerta(nuevoCliente) {
    let it = 1;
    for (prop in nuevoCliente) {
        console.log(nuevoCliente[prop])
        alerta.children[it].textContent = nuevoCliente[prop];

        if (it == 5) alerta.children[it].textContent = `${nuevoCliente[prop]} cuotas`
        it++;
    }
    alerta.style.opacity = 1
}



}

