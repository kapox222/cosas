/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} Imagen de retorno
 */

export const crearCarta=(carta)=>{

    if(!carta || carta.length===0) throw new Error ('La carta es necesaria')
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}