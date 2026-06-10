// SNACK 2
const makeTeam = (nome, puntiFatti, falliSubiti) => {
    const team = {
        nome: nome,
        puntiFatti: puntiFatti,
        falliSubiti: falliSubiti
    }
    return team;
}
//Math.floor(Math.random()*10
const torneo = [
    makeTeam ('Inter', 0, 0),
    makeTeam ('Juventus', 0, 0),
    makeTeam ('Milan', 0, 0),
    makeTeam ('Pizzighettone', 0, 0),
]

console.table(torneo);

for (const squadra of torneo) {
    squadra.falliSubiti = Math.floor(Math.random() * 10);
    squadra.puntiFatti = Math.floor(Math.random() * 10);
}

console.table(torneo); 
