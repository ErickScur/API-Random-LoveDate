const DateGenerator = require('./utils/DateGenerator');
module.exports = {
    async randomDate(req,res){
        let date;
        let qtd = 1;
        if(req.params.qtd){
            qtd = req.params.qtd
        }
        if(req.body.casa){
            date = await DateGenerator.randomDateCasa(qtd);
        }else{
            date = await DateGenerator.randomDate(qtd);
        }
        res.json(date);
    }
}