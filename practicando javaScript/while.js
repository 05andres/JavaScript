
var i = 0;

/*while(i<=10){
	i++;
    
    if(i === 5){
    	continue;
    }

	console.log(i);
	

}*/


/*do{
	i++;
	if(i===5){
		continue;
	}
	console.log(i);
	
	

}while(i<10);*/

//ciclo for
/*
 var Persona = function(){
 	this.nombre="juan";
 	this.edad = 18;
 	this.apellido = "lopez";

 };
 Persona.prototype.direcion="COLOMBIA PEREIRA";


var juan = new Persona();
for(prop in juan ){
	if(juan.hasOwnProperty(prop)){
		continue;
	}
 	console.log(prop,":",juan[prop]);
 }

 for(num in [1,2,3,4,5,6,7,8,9,10]){
 	console.log(num);
 }

 [1,2,3,4,5,6,7,8,9,10].forEach(function(val){
 	console.log(val);
 });
*/
//rotulacion ciclos
for_principal:
for(var i = 1 ; i<=5;i++){
	console.log("i:",i);
	for_secundario:
	for(var j = 1 ; j<=5;j++){
		console.log("j:",j);
		for(var x = 1; x <=5;x++){
			console.log("x",x);
			break for_secundario;
		}
	}
}






















