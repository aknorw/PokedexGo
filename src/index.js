import POKEDEX from './pokedex.js';

module.exports = function(str) {

  const locale = require(`../locales/${str.toLowerCase()}.json`);

  return POKEDEX.map((pokemon) => {
    let { name, type } = locale[pokemon.id];
    return Object.assign(pokemon, { name, type });
  })

}
