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

pg.schema.hasTable('pokemons').then(function(exists) {
  if (!exists) {
    return pg.schema.createTable('pokemons', function(table) {
      table.increments(); // integer id
      table.string('numero')
      table.jsonb('infos')
    }).then(async  () => {
      const pokemonsToInsert = pokemons.map(pokemons => {
         return {
           numero: pokemons.numero,
           infos: JSON.stringify(pokemons)
         }
      })
      await pg("pokemons").insert(pokemonsToInsert);
  }
)

  }
});
module.exports = pg;