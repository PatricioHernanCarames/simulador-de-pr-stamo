// Clases
function Cliente(name, surname, age, monto, cuotas = 12, email, telefono) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.monto = monto;
  this.cuotas = cuotas;
  this.email = email;
  this.telefono = telefono;
}

// Elementos del DOM
let inputs = document.querySelectorAll("input");
let buttons = document.querySelectorAll("button");
let alerta = document.querySelector(".alert");
let danger = document.querySelector(".dangerAlert");
let dolar = document.querySelector(".dolar");
let urlDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";


// General
buttons[1].addEventListener("click", (e) => {
  alerta.classList.add("alertaFadeIn");
  alerta.classList.toggle("alertAnim");

  e.preventDefault();
  let cliente = new Cliente(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].value,
    inputs[4].value,
    inputs[5].value,
    inputs[6].value
  );
  sessionStorage.prestamo = JSON.stringify(cliente);
  let edad = parseInt(inputs[4].value);

  if (edad > 17) {
    danger.style.opacity = 0;

    showAlerta(cliente);

    console.log(cliente);
  } else {
    danger.style.opacity = 1;
  }
});

buttons[0].addEventListener("click", () => {
  alerta.classList.toggle("alertaFadeIn");
  alerta.classList.add("alertAnim");
});

// Funciones
function showAlerta(nuevoCliente) {
  let it = 1;
  for (prop in nuevoCliente) {
    console.log(nuevoCliente[prop]);
    alerta.children[it].textContent = nuevoCliente[prop];

    if (it == 5)
      alerta.children[it].textContent = `${nuevoCliente[prop]} cuotas`;
    it++;
  }
  alerta.style.opacity = 1;
}




$(buttons[2]).click(function () {
 //let dolar=querySelector(".dolar");

  $.get(urlDolar, function (datos) {
    
    let dolarOfCompra;
    let dolarOfVenta;
    for (let i = 0; i < datos.length; i++) {
      
      for (let valor in datos[0]) {
        
        dolarOfCompra = datos[0][valor]["compra"];
        dolarOfVenta = datos[0][valor]["venta"];
      }
    }
    console.log(dolarOfCompra);
    console.log(dolarOfVenta);

    $(".DC").html("Dolar oficial compra: " + dolarOfCompra);
    $(".DV").html("Dolar oficial venta: " + dolarOfVenta);
    

  });
});

 