import { crearCarta } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * Turno de la computadora
 * @param {number} puntosMinimos 
 * @param {number} puntosHTML 
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<String>} deck 
 */


export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck=[] ) => {

    if(!puntosMinimos) throw new Error ('Puntos minimos son necesarios');

    let puntosComputadora=0;
    do {
        
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        divCartasComputadora.append(crearCarta(carta) );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}