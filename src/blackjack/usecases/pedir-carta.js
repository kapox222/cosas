/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck 
 * @returns {String} Devuelve la ultima carta del deck
 */


export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck o no existe el deck';
    }
    const carta = deck.pop();
    return carta;
}