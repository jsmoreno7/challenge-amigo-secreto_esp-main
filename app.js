// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
'use strict'

let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
        if(nombreAmigo === ''){
            alert("Por favor, ingresa un nombre"); 
        } else { 
           amigos.push(nombreAmigo);
            //console.log(amigos);
         return;
        }
        limpiarCaja();
 }

 function limpiarCaja(){
    document.querySelector("#amigo").value = '';
    
}
function actualizarListaAmigos(){
    let listaHTML = document.querySelector("#listaAmigos");
    listaHTML.innerHTML = "";
    for(let i = 0; i <= amigos.length; i++){
        console.log(amigos);
    }
}

