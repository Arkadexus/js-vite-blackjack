// Esta función me permite tomar una carta

/**
 * 
 * @param {Array<string>} deck El deck con las cartas actuales
 * @returns {String} La carta retornada desde el deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length < 1 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}