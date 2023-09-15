/**
 * 
 * @description Me da el valor de una carta
 * @param {String} carta La carta de la que queremos obtener el valor 
 * @returns {Number} El valor de esta carta
 */
export const valorCarta = ( carta ) => {

    if(!carta){
        throw new Error(`No se ha pasado ninguna carta`);
    }

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}