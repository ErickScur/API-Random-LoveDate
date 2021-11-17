const GetRandomFromFile = require('./randomizers/GetRandomFromFile');
const RandomNum = require("./randomizers/RandomNumber");
module.exports = {
    async randomDateCasa(qtd){
        let date = {};
        let atividades = __dirname + '/data/atividades-casa.json';
        let pratos = __dirname + '/data/pratos-casa.json';
        let sobremesas = __dirname + '/data/sobremesas-casa.json';
        let drinks = __dirname + '/data/drinks-casa.json';
        for(let i = 0; i < qtd; i++){
            date["atividade"+(i+1)] = await GetRandomFromFile.GetRandomFromFile(atividades);
        }
        date["pratoPrincipal"] = await GetRandomFromFile.GetRandomFromFile(pratos);
        date["sobremesa"] = await GetRandomFromFile.GetRandomFromFile(sobremesas);
        date["drink"] = await GetRandomFromFile.GetRandomFromFile(drinks);
        return date;
    },
    async randomDate(qtd){
        let date = {};
        let locais = __dirname + '/data/locais.json';
        let local = await GetRandomFromFile.GetRandomFromFile(locais);
        if(local == "random"){
            let randomIdeas = __dirname + '/data/random-ideas.json';
            for(let i = 0; i < qtd; i++){
                date["atividade"+(i+1)] = await GetRandomFromFile.GetRandomFromFile(randomIdeas);
            }
        }else{
            date["local"] = local;
            let especialNum = RandomNum(0,10);
            let especiaisFile =  __dirname + '/data/especiais.json';
            let isEspecial = false;
            if(especialNum==7)
                isEspecial = true;

            switch (local){
                case "cinema":
                    let generosFilmes = __dirname + '/data/generos-filmes.json';
                    date["generoFilme"] = await GetRandomFromFile.GetRandomFromFile(generosFilmes);
                    if(isEspecial)
                        date["especial"] = await GetRandomFromFile.GetRandomFromFile(especiaisFile);
                    break;
                case "restaurante":
                    let tiposRestaurante = __dirname + '/data/tipos-restaurente.json';
                    date["tipoRestaurante"] = await GetRandomFromFile.GetRandomFromFile(tiposRestaurante); 
                    if(isEspecial)
                        date["especial"] = await GetRandomFromFile.GetRandomFromFile(especiaisFile);
                    break;
            }
        }
        return date;
    }
}
