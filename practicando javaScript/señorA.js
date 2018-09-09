

function Jugador(nombre){

	this.nombre=nombre;
	this.pv=100;
	this.sp=100;

	this.curar = function(jugadorObjativo){
		if(this.sp >= 40){
			this.sp  -=40;
			jugadorObjativo.pv += 20 ;

		}else{
			console.log(this.nombre + "no tiene pv");

		}
		this.estado(jugadorObjativo);


		}
	this.tirarFlecha= function(jugadorObjativo){
		if(jugadorObjativo.pv > 40){
			jugadorObjativo.pv-=40;
		}else{
			jugadorObjativo.pv = 0;
			console.error(jugadorObjativo.nombre+ "murio!!!");
		}
			
		this.estado(jugadorObjativo);

		}
	this.espada =function(jugadorObjativo){
		if(this.sp>40){
			jugadorObjativo.pv-=10;
			this.sp-=20;
		}else{
			console.info(this.nombre+"no tiene pv");
		}
		this.estado(jugadorObjativo);
	}
		this. estado = function(jugadorObjativo){
		console.info(this);
		console.info(jugadorObjativo);
	}

};

var gandalf= new Jugador("Gandalf");
var legolas= new Jugador("Legolas");
console.log(gandalf);
console.log(legolas);
gandalf.curar(legolas);







