

function Persona(){
	this.nombre  ="andres";
	this.apellido="lopez";
	this.edad    ="23";
	this.pais    = "Colombia";
	
}

Persona.prototype.imprimirInfor= function(){
	console.log(this.nombre+" "+this.apellido+"("+this.edad+")");

}
var and= new Persona();


var a = "Andres";


Number.prototype.esPositivo = function(){
	if(this> 0){
		return true;
	}else{
		return false;
	}
}