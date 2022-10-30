function CalcularPromedio(){
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var v4 = document.getElementById("n4").value;
    var v5 = document.getElementById("n5").value;
    var v6 = document.getElementById("n6").value;
    var pro_medio =(parseFloat(v1)+parseFloat(v2)+parseFloat(v3)+parseFloat(v4)+parseFloat(v5)+parseFloat(v6))/6;
    document.getElementById("promedio").innerHTML = pro_medio;
    
}

function notas(array){
var i = 0; suma = 0; arraypromedio = array.length;
    while( i < arraypromedio){
            suma = suma + array[i++];
        }
        return suma / arraypromedio;
        
}
var array = [6,8,9,2,5,10];
var final= notas(array);
console.log("Notas del alumno son: " + array);
console.log ("Suma de las notas es: "+ suma);
console.log("promedio de notas: "+ final);

