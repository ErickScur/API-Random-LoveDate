const GetRandomFromFile = require('./randomizers/GetRandomFromFile');

module.exports = {
    async randomDateCasa(){
        let date = {};
        let atividades = __dirname + '/data/atividades-casa.json';
        let pratos = __dirname + '/data/pratos-casa.json';
        let sobremesas = __dirname + '/data/sobremesas-casa.json';
        let drinks = __dirname + '/data/drinks-casa.json';
        date["atividade"] = await GetRandomFromFile.GetRandomFromFile(atividades);
        date["pratoPrincipal"] = await GetRandomFromFile.GetRandomFromFile(pratos);
        date["sobremesa"] = await GetRandomFromFile.GetRandomFromFile(sobremesas);
        date["drink"] = await GetRandomFromFile.GetRandomFromFile(drinks);
        return date;
    },
    async randomDate(){
        let date = {};
        let locais = __dirname + '/data/locais.json';
        let local = await GetRandomFromFile.GetRandomFromFile(locais);
        if(local == "random"){
            let randomIdeas = __dirname + '/data/randomdsd-ideas.json';
            date = await GetRandomFromFile.GetRandomFromFile(randomIdeas);
        }else{
            date["local"] = local;
            if(local == "cinema"){  
                let generosFilmes = __dirname + '/data/generos-filmes.json';
                date["generoFilme"] = await GetRandomFromFile.GetRandomFromFile(generosFilmes); 
            }
        }
        return date;
    }
}
