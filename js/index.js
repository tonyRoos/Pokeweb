console.log("Observação : Esta versão imprime informações no console log a fim de comprovar a funcionalidade de salvar a lista de pokemons acessados via 'estou com sorte'");
console.log(localStorage.getItem('randomId'));


let pokeApi = new PokeApi();
let render = new Render();
let pos = 1;
let randomId = [];


if (localStorage.getItem('randomId') === null) {
} else {
  randomId = JSON.parse(localStorage.getItem('randomId'));
}

/*
====  Não funciona pois há um espaço vazio entre pokemons 898 e 10001 ( e os pokemons a partir de 899 estão em offset : 9103 ) ====
let totalPokemons;
pokeApi.buscarQuantia().then( size => { totalPokemons = size; } );
*/

pokeApi.buscarPokemon(pos)
  .then(pokemon => {
    render.renderizar(new Pokemon(pokemon));
  });

  function tts(speech) {
    window.speechSynthesis.cancel();
    let msg = new SpeechSynthesisUtterance(speech);
    //speechSynthesisUtteranceInstance.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }

function generateRandom(size = 893) {
  let rnd = Math.floor(Math.random() * size);
  randomId = randomId.length >= 893 ? [] : randomId;
  if (randomId.indexOf(rnd) == -1) {
    randomId.push(rnd);
    return rnd;
  }
  return null;
}

function findPoke() {
  pokeApi.buscarPokemon(pos)
    .then(
      pokemon => {
        render.renderizar(new Pokemon(pokemon));
        pos = pokemon.id;
        document.getElementById("input_name").placeholder = "Nome ou ID do pokemon";

        tts(pokemon.name);

      }).catch(function (_err) {
        pos = 1;
        document.getElementById("input_name").value = "";
        document.getElementById("input_name").placeholder = "Digite um id válido!";
      });
}

function searchPoke() {
  if (pos == document.getElementById("input_name").value) {
    return null;
  }
  pos = document.getElementById("input_name").value;
  findPoke();
}

function nextPoke() {
  if (pos <= 10220) {
    pos += pos == 898 ? 9103 : 1; 
  }
  findPoke();
}

function prevPoke() {
  if (pos > 1) {
    pos -= pos == 10001 ? 9103 : 1;
  }
  findPoke();
}

function rndPoke() {
  pos = null;
  while (pos == null) {
    pos = generateRandom();
  }
  findPoke();
  localStorage.setItem('randomId', JSON.stringify(randomId));
  console.log(localStorage.getItem('randomId'));
}

function openTab() {
  document.getElementById('closedTab').style.display = "none";
  document.getElementById('openedTab').style.display = "block";
  document.getElementById('openTab').style.display = "inline-block";

  pos = 1;
  findPoke();
  setTimeout(() => {
    tts("Pokedex conected and ready!");
  }, 50);
  
}

function closeTab() {
  document.getElementById('closedTab').style.display = "block";
  document.getElementById('openedTab').style.display = "none";
  document.getElementById('openTab').style.display = "none";

  tts("turning off!");
}
