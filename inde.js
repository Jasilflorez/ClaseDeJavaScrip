
let newContacto="";
let lista = ["jose", "henry","geral"];
let seguir =""
do {
    do {
        newContacto = prompt("Agregar Nuevo Contactos Nombre y Apellido");
        if (newContacto) {
            add(newContacto,lista);
            console.log(lista);
    
        } else {
            alert("ingresa tu nombre y apellido")
        }   
    } while (newContacto == "");
    
    
    let lista2 = "";
for (let i = 0; i < lista.length; i++) {
    lista2 += i +"_"+lista[i]+"  ";
    
}
let eliminar = prompt("Quiere Eliminar algun Contacto Agregado \n si o no")
if (eliminar==="si") {
    const Contacto = prompt("escribe el numero del contacto que quieres eliminar\n"+ lista2 +"\n")
    
    delet(Number(Contacto),lista)
    console.log(lista);
}else{
    alert("No Eliminaste A Nadien De Tu Costactos")
}

function add(nombre, arr){        
    arr.push(nombre);
}
function delet(eliminarContacto,arr){
    arr.splice(eliminarContacto,1)
}
seguir = prompt("Quieres Seguir agregado \n si o no ")

console.log(lista)    
} while (seguir === "si");
