import _ from "underscore";
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCartas  Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} regresa un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCartas,tiposEspeciales) => { //el export es para poder importarlo luego en el index js

    if (!tiposDeCartas || tiposDeCartas.length===0 ) throw new Error ('Tipos de carta es obligatorio como un array de string');
    
    if (!tiposEspeciales || tiposEspeciales.length===0 ) throw new Error ('Tipos especiales es obligatorio como un array de string');
    
    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}



// export default crearDeck;  esto sirve para exportarlo en vez de poner el export delante dek const crearDeck