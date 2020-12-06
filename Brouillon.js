const pokemon = require('./src/pokedex.json');

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    database : 'pokemons'
  }
})

  knex.schema.hasTable('pokemons').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('pokemons', function(table) {
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