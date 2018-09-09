


// function evento(arg){
// 	console.log("me dispare");
// 	console.log(arg.x,arg.y);
// }


// var objeto = document.getElementById("objDemo");

// objeto.addEventListener("click",evento);


// document.onmousedown = function(arg){

// 	if(arg.button === 2){
// 		alert("click bloqueado");
// 		return;

// 	}



// 	console.log("no hay problema");
// }

// document.onmouseup = function(){

// 	var texto = window.getSelection().toString();
// 	console.log(texto);
// }


function validar (){

	var nombre = document.getElementById("txtnombre").value;
	var apellido = document.getElementById("txtapellido").value;

	if(nombre.length < 1 ){
		return false;

	}
	if(apellido.length < 1){
		return false;
	}
	return  true;
}
function getParamURL(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

console.log(window.location.search);
console.log(window.location.search.split("&"));


console.log(getParamURL("txtnombre"));








