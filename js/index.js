// eslint-disable-line max-len
console.log( "Observação : Esta versão imprime informações no console log a fim de comprovar a funcionalidade de salvar a lista de pokemons acessados via 'estou com sorte'" );
console.log( localStorage.getItem( 'randomId' ) );

const pokeApi = new PokeApi();
const render = new Render(); // eslint-disable-line no-undef
let pos = 1;
let randomId = [];

if ( localStorage.getItem( 'randomId' ) !== null ) {
  randomId = JSON.parse( localStorage.getItem( 'randomId' ) );
}

/*
====  Não funciona pois há um espaço vazio entre pokemons 898 e 10001 ====
let totalPokemons;
pokeApi.buscarQuantia().then( size => { totalPokemons = size; } );
*/

pokeApi.buscarPokemon( pos )
  .then( pokemon => {
    render.renderizar( new Pokemon( pokemon ) );
  } );

function tts( speech, lang = 'en-US' ) {
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance( speech );
  msg.lang = lang;
  window.speechSynthesis.speak( msg );
}

function generateRandom( size = 893 ) {
  const rnd = Math.floor( Math.random() * size );
  randomId = randomId.length >= 893 ? [] : randomId;
  if ( randomId.indexOf( rnd ) === -1 ) {
    randomId.push( rnd );
    return rnd;
  }
  return null;
}

function findPoke() {
  pokeApi.buscarPokemon( pos )
    .then(
      pokemon => {
        render.renderizar( new Pokemon( pokemon ) );
        pos = pokemon.id;
        document.getElementById( 'input_name' ).placeholder = 'Nome ou ID do pokemon';
        tts( pokemon.name );
      } 
    ).catch( () => {
      pos = 1;
      document.getElementById( 'input_name' ).value = '';
      document.getElementById( 'input_name' ).placeholder = 'Digite um id válido!';
    } );
}


function searchPoke() { // eslint-disable-line no-unused-vars
  if (pos === document.getElementById( 'input_name' ).value ) {
    return null;
  }
  pos = document.getElementById( 'input_name' ).value;
  findPoke();
  return null;
}

function nextPoke() { // eslint-disable-line no-unused-vars
  if ( pos <= 10220 ) {
    pos += pos === 898 ? 9103 : 1;
  }
  findPoke();
}

function prevPoke() { // eslint-disable-line no-unused-vars
  if ( pos > 1 ) {
    pos -= pos === 10001 ? 9103 : 1;
  }
  findPoke();
}

function rndPoke() { // eslint-disable-line no-unused-vars
  pos = null;
  while ( pos == null ) {
    pos = generateRandom();
  }
  findPoke();
  localStorage.setItem( 'randomId', JSON.stringify( randomId ) );
  console.log( localStorage.getItem( 'randomId' ) );
}

function openTab() { // eslint-disable-line no-unused-vars
  document.getElementById( 'closedTab' ).style.display = 'none';
  document.getElementById( 'openedTab' ).style.display = 'block';
  document.getElementById( 'openTab' ).style.display = 'inline-block';

  pos = 1;
  findPoke();
  setTimeout( () => {
    if ( new SpeechSynthesisUtterance().lang === 'pt-br' ) {
      tts( 'Pokedex conectada e pronta!', 'pr-BR' );
    } else {
      tts( 'Pokedex conected and ready!' );
    }
  }, 50 );
}

function closeTab() { // eslint-disable-line no-unused-vars
  document.getElementById( 'closedTab' ).style.display = 'block';
  document.getElementById( 'openedTab' ).style.display = 'none';
  document.getElementById( 'openTab' ).style.display = 'none';
  if ( new SpeechSynthesisUtterance().lang === 'pt-br' ) {
    tts( 'Desativando!', 'pt-BR' );
  } else {
    tts( 'turning off!' );
  }
}
