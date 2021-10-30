var player;
var pc = 0;
var reset = 0;

var piedra = 0;
var papel = 1;
var tijera = 2;

function jugar(player) {
    if (player == "papel") {
        var player = 1;
    
        if (player == pc){
            console.log("Empate, la pc saco papel");
            pc ++;
        } else if (player > pc) {
            console.log("Gano jugador, pc saco piedra")
            pc ++;
        } else {
            console.log("Gano pc, saco tijera")
            pc ++;
        }
    } else if (player == "piedra") {
        var player = 0;

        if (player == pc){
            console.log("Empate, la pc saco piedra");
            pc ++;
        } else if (pc == 1) {
            console.log("Gano pc, saco papel") 
            pc ++;
        } else {
            console.log("Gano jugador, pc saco tijera")
            pc ++;
        }
    } else if (player == "tijera") {
        var player = 2;

        if (player == pc) {
            console.log("Empate, la pc saco tijera")
            pc ++;
        } else if (pc == 1) {
            console.log("Gana jugador, pc saco papel")
            pc ++;
        } else {
            console.log("Gano pc, con piedra")
            pc ++;
        }
    } else {
        console.log("Por favor, escriba correctamente piedra, papel o tijera")
    }
    if (pc === 3) {
        pc = reset;
    } else {
        console.log("a");
    }
}
