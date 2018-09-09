

var arr=[
       true,
       {nombre:"andres",
        apellido:"lopez"
       },
       function(){
       	console.log("estoy viviendo en un arreglo.");
       },
       function(persona){
       	console.log(persona.nombre+" "+persona.apellido);
       },
       [
       "andres",
       "carlos",
       "karol",
         [
         "juan",
         "olga",
         function(){
         	console.log(this);
         }

         ]
        ]
       ];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre+" "+ arr[1].apellido);
arr[2]();
arr[3](arr[1]);
console.log(arr[4][3][0]);

var arr2= arr[4][3];
arr2[1]="lucia";
console.log(arr2);
console.log(arr);
arr2[2]();




