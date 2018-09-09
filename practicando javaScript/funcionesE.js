

var carro ={
	color:"blanco",
	marca:"mazda",
	imprimir:function(){
		var salida = this.marca + "- " + this.color
		return salida;
	}
}

var carro2 ={
	color:"rojo",
	marca:"toyota"
}

console.log(carro.imprimir());

var logCarro = function(arg1,arg2){
	console.log("carro",this.imprimir());
	console.log("Argumentos",arg1,arg2);
	console.log("=====================");
}

var logModelocarro = logCarro.bind(carro);
logModelocarro("abc","xyz");


logModelocarro.call(carro,"123","456");
logModelocarro.apply(carro,["asd", "qwe"]);

//funciones prestadas

console.log(carro.imprimir.call(carro2));