const RandomNumber = require('./RandomNumber');
const jsonfile = require('jsonfile');
const file = __dirname + '/../data/locais.json';

async function randomLocale(){
    try{
        let obj = await jsonfile.readFile(file);
        let randomNum = RandomNumber(0,(obj.length - 1));
        return obj[randomNum];
    }catch(err){
        return 'error';
    }
}
module.exports = randomLocale;


