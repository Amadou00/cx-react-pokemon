const knex = require('knex')
const pokemon = require('./src/pokedex.json');

const pg = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    database : 'pokedex'
  },
  searchPath: ['knex', 'public'],
});

pg.schema.hasTable('pokemons').then(function(exists) {
  if (!exists) {
    return pg.schema.createTable('pokemons', function(table) {
      table.increments(); // integer id
      table.string('numero')
      table.jsonb('infos')
    }).then(async  () => {
      const pokemonsToInsert = pokemon.map(pokemon => {
         return {
           numero: pokemon.numero,
           infos: JSON.stringify(pokemon)
         }
      })
      await pg("pokemons").insert(pokemonsToInsert);
  }
)

  }
});
module.exports = pg;