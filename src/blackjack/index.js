import _ from 'underscore';
// import {crearDeck} from './usecases/crear-deck';
// import { pedirCarta } from './usecases/pedir-carta';
// import { valorCarta } from './usecases/valor-carta';

/*
    Lo de arriba esta bien pero es mejor lo de abajo, con un solo import,
    esto lo consigue creando un documento index en usecases donde 
    pone todos los exports, asi puecde cogerlos todos en un solo import
*/


import { crearDeck,pedirCarta,valorCarta, turnoComputadora, crearCarta } from './usecases/index';

// import crearDeck  from './usecases/crear-deck'; Esto es para vuandfo uso el export default
// import {crearDeck as crearNuevoDeck} from './usecases/crear-deck';  Le puedo cambiar el nombre en eset archivo
// y se pueden hacer cosas como import crearDeck, {cosaOtra} from... o {crerarDerck, otraCosa} y eso



let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


deck=crearDeck(tipos, especiales);


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    divCartasJugador.append( crearCarta(carta) );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador,puntosHTML,divCartasComputadora ,deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador,puntosHTML ,divCartasComputadora, deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador,puntosHTML,divCartasComputadora , deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos,especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
