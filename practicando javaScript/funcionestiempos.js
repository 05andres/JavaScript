 




 // setTimeout(function(){

 // 	console.log("paso un segundo");

 // },1000);

// var segundo = 0;

// var intervalo = setInterval(function(){

// 	segundo ++;

// 	console.log("seg :" ,segundo);

// 	if(segundo === 3){
// 		clearInterval(intervalo);
// 	}

// },1000)

var juan = {
	nombre:"juan",
	edad:30,
	imprimir:function(){
		var self = this;

		setTimeout(function(){
			console.log(self);
			console.log(self.nombre,self.edad);
// 
		},1000);
		

	}

};

juan.imprimir();