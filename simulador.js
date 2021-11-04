/*const ivA = 0.21;

const interes = 0.0375;

var monto=0;

var financiación = 0;

var cuota=0;

var prestamo=0;



 
class Clientes{

    constructor(id , nombre, documento, saldo){
       
        this.id = id;
        this.nombre = nombre;
        this.documento = documento;
        this.saldo = saldo; 
    }
    getSaldo(){
        this.saldo;

    }
    getPrestamo(){
        this.saldo = this.saldo+monto;
        alert("En hora buena, has adquirido tu prestamo, chequea tu saldo");
    }
    descCuota(){
        this.saldo = this.saldo-cuota;
        alert("se va a descontar la suma de " + cuota + " pesos, en concepto de cuota" );
    }
    

}
let martaCliente = new Clientes(0001, "Marta Fort", 50667028, 1000000);
let pabloCliente = new Clientes(0002, "Pablo Riusech", 17898436, 150000);
let javierCliente = new Clientes(0002, "Javier Paez", 17898436, 150000);
let sebastianCliente = new Clientes(0002, "Sebastian De Miguel", 17898436, 150000);
let martinCliente = new Clientes(0002, "Martin Nieto", 17898436, 150000);



function Emprestito(){


monto=parseInt(formulario.children[0].value);

financiación=parseInt(formulario.children[1].value);


prestamo=( monto +((interes*financiación)*monto));

cuota = prestamo/financiación;

cuota = cuota + cuota*ivA
     
}


function almacenarCuota(){
let cuotasPrestamo = [];

for(let i=0; i<financiación; i++){
    cuotasPrestamo.push(cuota);



}
}


function felicitaciones(){

let felicitaciones = document.createElement("p");

felicitaciones.innerHTML =" <h2>A la brevedad nos contactaremos contigo</h2>"; 

felicitaciones.style.color = "red";

felicitaciones.style.backgroundColor = "#d0c27b";

felicitaciones.style.fontFamily = "verdana";

felicitaciones.style.display = "flex";

felicitaciones.style.alignItems = "center";

felicitaciones.style.justifyContent = "center";





document.body.appendChild(felicitaciones);
}

function almacenamiento(){
    localStorage.setItem("martaCliente");//guarda el objeto en el local storage
    localStorage.setItem("pabloCliente" );//guarda el objeto en el local storage
    localStorage.setIem("javierCliente" );//guarda el objeto en el local storage
    localStorage.setItem("sebastianCliente");//guarda el objeto en el local storage
    

}

function mostrar(){
    let clientes = JSON.parse(localStorage.getItem("martaCliente", "pabloCliente", 
    "javierCliente", "sebastianCliente", "martinCliente"));
    
    console.log(clientes);
}




//codigo de prueba-->

let miFormulario      = document.getElementById("formulario");
  miFormulario.addEventListener("submit", validarFormulario, Emprestito, felicitaciones);
  
  function validarFormulario(e){
      //Cancelamos el comportamiento del evento
      e.preventDefault();
      //Obtenemos el elemento desde el cual se disparó el evento
      let formulario = e.target
      //Obtengo el valor del primero hijo <input type="text">
      console.log(formulario.children[0].value); 
      //Obtengo el valor del segundo hijo <input type="number"> 
      console.log(formulario.children[1].value); 






  }*/

let nombre="";
let email="";
let edad="";
let montoPrestamo="";
let tiempoFinanciacion="";

function obtenerDatos(){

     nombre = document.getElementById("name").value;
     email = document.getElementById("email").value;
     edad = document.getElementById("age").value;
     montoPrestamo = document.getElementById("monto").value;
     tiempoFinanciacion = document.getElementById("time").value;

    
    let datos = {

        nombre : nombre,
        email : email,
        edad : edad,
        montoPrestamo : montoPrestamo,
        tiempoFinanciacion : tiempoFinanciacion

  }
     
  console.log(datos);

    localStorage.setItem("nombre", nombre );
    localStorage.setItem("email", email );
    localStorage.setItem("edad", edad );
    localStorage.setItem("montoPrestamo", montoPrestamo );
    localStorage.setItem("tiempoFinanciacion", tiempoFinanciacion );

    localStorage.setItem("datos", JSON.stringify(datos));
  
  }

  function felicitaciones(){

    let felicitaciones = document.createElement("div");
    
    felicitaciones.innerHTML = 

    `<div class="card">
  <h5 class="card-header">En hora buena!</h5>
  <div class="card-body">
    <h5 class="card-title">Tu credito ha sido aprobado</h5>
    <p class="card-text">Gracias por elegirnos, nos contactaremos contigo a la brevedad</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;


    
    /*felicitaciones.style.color = "red";
    
    felicitaciones.style.backgroundColor = "#d0c27b";
    
    felicitaciones.style.fontFamily = "verdana";
    
    felicitaciones.style.display = "flex";
    
    felicitaciones.style.alignItems = "center";
    
    felicitaciones.style.justifyContent = "center";
    
    felicitaciones.style.gridColumnStart;*/
    
    
    
    
    document.body.appendChild(felicitaciones);
    }

function verAlmacenamiento(){

    let guardado =JSON.parse(localStorage.getItem("datos"))
  
    console.log(guardado);    
}

function limpiar(){
        localStorage.clear();

    }


    
    function calcular(){

        let sueldo= parseInt(montoPrestamo*3);

        let ingreso = document.getElementById("ingreso").value;

        ingreso.innerHTML = sueldo;


    }

let boton = document.getElementById("boton");
boton.addEventListener("click", obtenerDatos, verAlmacenamiento, calcular);

let boton2 = document.getElementById("boton2");
boton.addEventListener("click", felicitaciones);