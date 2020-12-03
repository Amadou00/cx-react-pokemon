const knex = require('knex')
const tables = require('../src/javascript/tables.js')
let pokemon = tables.pokeTable
let attaques = tables.attaqueTable

const data = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'testpgAdmin',
    database : 'pokedex'
  },
  searchPath: ['knex', 'public'],
});

data.schema.createTable('pokemon', function (tablePok) {
  tablePok.increments();
  pokemon.forEach(attribut => {
    tablePok.string(attribut);
  });
}).then(console.log)

data.schema.createTable('attaques', function (tableAtt) {
  tableAtt.increments();
  attaques.forEach(attribut => {
    tableAtt.string(attribut);
  });
}).then(console.log)