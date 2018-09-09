

//var reg1= RegExp("A");
//i = insensible
//g=todas apariciones
//m= multilinea
/*var reg2 = /a/;
var texto = "La respuesta de la suma es : 45 + 60 = 105 ";

var arr= texto.match( /\d{1,}|respuesta/ig);
console.log(arr);*/

//Comentario linea simple
/*
multi liean
*/

var arr=["Carlos",{
	nombre :"Carlos",
	apellido:"lopez",
	getNombre : function(){
		return this.nombre+" " + this.apellido;
	}
	},true,function(){console.log(this);}

];

//console.log(arr);


//palabreas reservadas

try{
	throw  new Error('nombre error');



		}

catch(e){
	registroError(e);

	
		

	
}
finally{
	console.log("finalmente");
}

function registroError(e){
	var ahora = new Date();
	console.log(" se registro un error:",ahora.getTime());






}







 

















