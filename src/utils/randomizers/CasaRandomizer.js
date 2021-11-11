const RandomNumber = require('./RandomNumber');
const jsonfile = require('jsonfile');
const atividades = __dirname + '/../data/atividades-casa.json';
const pratos = __dirname + '/../data/pratos-casa.json';
const sobremesas = __dirname + '/../data/sobremesas-casa.json';
const drinks = __dirname + '/../data/drinks-casa.json';

async function RandomAtividadeCasa(){
    try{
        let obj = await jsonfile.readFile(atividades);
        let randomNum = RandomNumber(0,(obj.length - 1));
        return obj[randomNum];
    }catch(err){
        return 'error';
    }
}
async function RandomPratoPrincipal(){
    try{
        let obj = await jsonfile.readFile(pratos);
        let randomNum = RandomNumber(0,(obj.length - 1));
        return obj[randomNum];
    }catch(err){
        return 'error';
    }
}
async function RandomSobremesa(){
    try{
        let obj = await jsonfile.readFile(sobremesas);
        let randomNum = RandomNumber(0,(obj.length - 1));
        return obj[randomNum];
    }catch(err){
        return 'error';
    }
}
async function RandomDrink(){
    try{
        let obj = await jsonfile.readFile(drinks);
        let randomNum = RandomNumber(0,(obj.length - 1));
        return obj[randomNum];
    }catch(err){
        return 'error';
    }
}
module.exports = {RandomAtividadeCasa, RandomPratoPrincipal, RandomSobremesa, RandomDrink};