
// SNACK 1
const makeBike = (nome, peso) => ({ nome, peso });

// versione verbosa della factory function senza shorthand che fa la stessa cosa
const makeBike1 = (nome, peso) => {
    const bike = {
        nome: nome,
        peso: peso
    };
    return(bike);
}

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


