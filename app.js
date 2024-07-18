let numeroSecreto;
let contador;
let numGenerado = [];
let numMaximo = 100;

function asignar(elem, txt) {
    let elemetoHTML = document.querySelector(elem);
    elemetoHTML.innerHTML = txt;
}

function generarNumero() {
    let numGen = Math.floor(Math.random() * numMaximo) + 1;
    if (numGenerado.length == numMaximo) {
        asignar('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (numGenerado.includes(numGen)) {
            return generarNumero();
        } else {
            numGenerado.push(numGen);
            return numGen;
        }
    }
}

function verificar() {
    let numusuario = parseInt(document.getElementById('caja').value);
    if (numusuario === numeroSecreto) {
        asignar('p', `Acertaste en ${contador} ${(contador == 1) ? "vez" : "veces"}`);
        document.getElementById('reinicio').removeAttribute('disabled');
    } else {
        if (numusuario > numeroSecreto) {
            asignar('p', 'El número secreto es menor');
        } else {
            asignar('p', 'El número secreto es mayor');
        }
        contador++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.getElementById('caja').value = '';
}

function estructuraInicial() {
    asignar('h1', 'Juego del Número Secreto');
    asignar('p', `Ingresa un número del 1 al ${numMaximo}`);
    numeroSecreto = generarNumero();
    contador = 1;
}

function reinicio() {
    limpiarCaja();
    estructuraInicial();
    document.getElementById('reinicio').setAttribute('disabled', 'true');
}

estructuraInicial();
