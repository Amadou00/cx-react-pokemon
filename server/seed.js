const knex = require('knex')
const pokemons = require('./src/pokedex.json');

const pg = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'testpgAdmin',
    database : 'pokedex'
  },
  searchPath: ['knex', 'public'],
});

pg.schema.createTableIfNotExists("pokemons", function (table) {
  table.increments(); // id automatique
  table.string('numero')
  table.jsonb('infos')
}).then(async  () => {
      const pokemonsToInsert = pokemons.map(pokemon => {
         return {
           numero: pokemon.numero,
           infos: JSON.stringify(pokemon)
         }
      })
      await pg("pokemons").insert(pokemonsToInsert);
  }
)

module.exports = pg