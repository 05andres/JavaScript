


/*var a = new Boolean();

console.log(a.valueOf());

if(a.valueOf() ===true){
	console.log("Me Imprimi");
}

//objeto string

var a = new String("Andres lopez");

console.log(a);

var b="herrera";

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i= b.indexOf("e");
console.log("la letra esta",i);

var i= b.lastIndexOf("e");
console.log("la letra esta",i);

var nombre = a.substr(0,a.indexOf(" "));
console.log(nombre);

var split= a.split(" ");
console.log(split);
console.log(split.length);

//============

document.write(a.italics());

*/


//Objeto Fecha

var hoy= new Date();
var fMili = new Date(1);
var fFija = new Date(2016,9,24,23,10,15,1)




/*var inicio = new Date();

for (var i = 0 ; i<15000;i++){
	console.log("Algo");

}

var fin = new Date();
//console.log(inicio);
//console.log(fin);

var duracion = fin.getTime() - inicio.getTime();*/


var fecha = new Date(2018,6,2);

Date.prototype.sumarDias = function ( dias){

	this.setDate(this.getDate()+dias);
	return this;


}

//console.log(fecha);
//console.log(fecha.sumarDias(10));

Date.prototype.sumarAnios = function ( anios){

	this.setFullYear(this.getFullYear()+anios);
	return this;


}

//console.log(fecha);
//console.log(fecha.sumarAnios(-1));


// Objeto 

var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.466;
console.log(num1);
console.log(Math.round(num1*100)/100);

console.log(Math.floor(num1));

function ramdonEntre(min,max){

	return Math.floor(Math.random()*(max-min+1)+min);

}

console.log(ramdonEntre(500,1000));

console.log(Math.sqrt(4));

console.log(Math.pow(2,3));































