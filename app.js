let numeroSecreto = 0;
let intentos = 0;
let listaMumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
    }else{
        asignarTextoElemento('p', 'El número es mayor');
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';    //#: Busca en el HTML por id
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaMumerosSorteados);

    //si ya sorteamos todos los numeros:
    if (listaMumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //si el número generado esta incluido en la lista:
        if(listaMumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaMumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();    
    intentos = 1;    
    //console.log(numeroSecreto);
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar botón "Nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}



condicionesIniciales();