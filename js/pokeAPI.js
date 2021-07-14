class PokeApi {
    constructor() {
      this._url = "https://pokeapi.co/api/v2/pokemon";
    }
  
    buscarTodos() {
      let requisicao = fetch(`${ this._url }?limit=100&offset=200`);
      return requisicao.then( data => data.json() ).then( data => data.results );
    }

    buscarQuantia() { 
      let requisicao = fetch(this._url);
      let info = requisicao.then( data => data.json() ).then( data => data.count );
      return info;
    }
  
    buscarPokemon( id ) {
      let requisicao = fetch(`${ this._url }/${ id }`);
      return requisicao.then( data => data.json() );
    }  
  }