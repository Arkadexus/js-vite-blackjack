import _ from 'underscore'

const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

/**
 * 
 * @param {Array<string>} deck Debe ser un array vacío
 * @returns {Array<string>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (deck) => {

    if(!deck){
        throw new Error('Debes pasar un deck');
    }

    if(deck.length > 0){
        throw new Error('El deck debe estar vacío');
    }

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck;
