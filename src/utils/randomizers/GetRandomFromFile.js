const RandomNumber = require('./RandomNumber');
const jsonfile = require('jsonfile');

async function GetRandomFromFile(file){
    try{
        let obj = await jsonfile.readFile(file);
        let randomNum = RandomNumber(0,(obj.length - 1));
        return obj[randomNum];
    }catch(err){
        return 'error';
    }
}
module.exports = {GetRandomFromFile};


