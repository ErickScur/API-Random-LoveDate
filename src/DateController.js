const DateGenerator = require('./utils/DateGenerator');
module.exports = {
    async randomDate(req,res){
        let date;
        if(!req.body.casa){
            date = await DateGenerator.randomDateCasa();
        }else{
            date = await DateGenerator.randomDate();
        }
        res.json(date);
    }
}