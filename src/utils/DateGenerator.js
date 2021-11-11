const randomLocale = require('./randomizers/LocalRandomizer');
const CasaRandomizer = require('./randomizers/CasaRandomizer');

async function randomDateCasa(){
    let date = {};
    date["atividade"] = await CasaRandomizer.RandomAtividadeCasa();
    date["pratoPrincipal"] = await CasaRandomizer.RandomPratoPrincipal();
    date["sobremesa"] = await CasaRandomizer.RandomSobremesa();
    date["drink"] = await CasaRandomizer.RandomDrink();
    console.log(date);
}

randomDateCasa();