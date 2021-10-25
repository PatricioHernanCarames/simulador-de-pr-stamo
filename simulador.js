const ivA = 0.21;

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


monto=parseInt(prompt("ingrese el monto de su prestamo"));

financiación=parseInt(prompt("ingrese el tiempo de financiacion en meses"));


prestamo=( monto +((interes*financiación)*monto));

cuota = prestamo/financiación;

cuota = cuota + cuota*ivA
     
}

Emprestito();

let cuotasPrestamo = [];

for(let i=0; i<financiación; i++){
    cuotasPrestamo.push(cuota);



}

console.log(cuotasPrestamo);

console.log(martaCliente.saldo);

martaCliente.getPrestamo();

console.log(martaCliente.saldo);


martaCliente.descCuota();

console.log(martaCliente.saldo);




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












