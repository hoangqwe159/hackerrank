const URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_ID = 150;

function generateRandomIds (number) {
  const ids = {};
  while (Object.keys(ids).length < number) {
    const random = Math.trunc(Math.random() * MAX_ID) + 1;
    ids[random] = 1;
  }

  return Object.keys(ids);
}

console.log(generateRandomIds(10));

async function getPokemonData (ids) {
  const promises = [];
  for (const id of ids) {
    const promise = fetch(URL + id);
    promises.push(promise);
  }

  const responses = await Promise.all(promises);
  return Promise.all(responses.map(response => response.json()));
}

async function generateCards () {
  const ids = generateRandomIds(10);
  const data = await getPokemonData(ids);

  const fragment = document.createDocumentFragment();
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';

  for (const pokemon of data) {
    const cards = document.createElement('div');
    cards.className = 'cards';

    const hpPoint = document.createElement('div');
    hpPoint.className = 'hp-point';

    const hpSpan = document.createElement('span');
    hpSpan.textContent = 'HP';

    const hpDiv = document.createElement('div');
    hpDiv.textContent = pokemon.stats[0].base_stat;

    const avatarPlaceholder = document.createElement('div');
    avatarPlaceholder.className = 'avatar-placeholder';
  }
  
  console.log(data);
}

generateCards();