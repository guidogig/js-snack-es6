
// SNACK 1
const makeBike = (nome, peso) => ({ nome, peso });

const garage = [
    makeBike('Trek Émonda SLR 9', 6.6),
    makeBike('Specialized Tarmac SL7', 6.1),
    makeBike('Cannondale SuperSix EVO Hi-MOD', 7.9)
]

const trovaLeggera = (elenco) => {
    let piuLeggera = elenco[0];
    //console.log('Prima iterazione piu leggera: ', piuLeggera);
    for (let i = 0; i < elenco.length; i++) {
        //console.log('elenco[i] = ', elenco[i]);
        if (elenco[i].peso < piuLeggera.peso) {
            piuLeggera = elenco[i];
            //console.log('piuLeggera = ', piuLeggera);
        }
    }
    return(piuLeggera);
}

console.log('Garage: ', garage);

console.log('La più leggera del garage é: ',trovaLeggera(garage).nome, ' con un peso di: ', trovaLeggera(garage).peso);


