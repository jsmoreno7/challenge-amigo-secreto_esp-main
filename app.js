// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
'use strict'

let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
        if(nombreAmigo === ''){
            alert("Por favor, ingresa un nombre válido"); 
        } else { 
            amigos.push(nombreAmigo);
        }   
        limpiarCaja();
        actualizarListaAmigos();
    return;
 }

 function limpiarCaja(){
    document.querySelector("#amigo").value = '';
    
}
function ocultarLista(){
    document.querySelector('#listaAmigos').setAttribute('hidden', 'true'); // ocultar lista de Amigos en el evento OnClick
}
function actualizarListaAmigos(){
    let listaHTML = document.querySelector("#listaAmigos");
    listaHTML.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        let listItem = document.createElement('li'); 
        listItem.textContent = amigos[i];
        listaHTML.appendChild(listItem);
        }
    return;
}

function sortearAmigo(){
    let indexAleatorio = Math.floor(Math.random()*amigos.length);
    if(amigos.length === 0){
        alert("La lista está vacia");
    }else{
        let resultadoSorteoHTML = document.getElementById('resultado');
        resultadoSorteoHTML.innerHTML = amigos[indexAleatorio];
         }
        ocultarLista();
    return;
}

actualizarListaAmigos();
