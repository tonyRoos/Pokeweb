class Render {

    constructor() {
        this._bars = new statusBar();
        this._pokeTypes = new Poketype();
    }

    renderizar = (pokemon) => {
        let dadosPokemon = document.getElementById("dadosPokemon");
      
        let nome = dadosPokemon.querySelector(".nome");
        nome.innerHTML = pokemon.nome;
      
        let imagem = dadosPokemon.querySelector(".thumb");
        imagem.src = pokemon.imagem;
      
        let altura = dadosPokemon.querySelector(".altura");
        altura.innerHTML = pokemon.altura;
      
        let peso = dadosPokemon.querySelector(".peso");
        peso.innerHTML = pokemon.peso;
      
        let hp = dadosPokemon.querySelector(".hp");
        hp.innerHTML = pokemon.hp;
      
        let atk = dadosPokemon.querySelector(".atk");
        atk.innerHTML = pokemon.atk;
      
        let def = dadosPokemon.querySelector(".def");
        def.innerHTML = pokemon.def;
      
        let spAtk = dadosPokemon.querySelector(".spAtk");
        spAtk.innerHTML = pokemon.spAtk;
      
        let spDef = dadosPokemon.querySelector(".spDef");
        spDef.innerHTML = pokemon.spDef;
      
        let spd = dadosPokemon.querySelector(".spd");
        spd.innerHTML = pokemon.spd;
      
        this._bars.refreshAllBars(pokemon.hp, pokemon.atk, pokemon.def, pokemon.spAtk, pokemon.spDef, pokemon.spd);
      
        this._pokeTypes.refreshTypes(pokemon.typeList);
      }

}