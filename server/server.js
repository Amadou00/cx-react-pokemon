const express = require('express')
const app = express()
const port = 	3000
const db = require ("./seed.js")
//console.log(test);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/pokemon',(req,res) =>{
  db.select().from('pokemons').orderBy('id').then(function(data){
      res.send(data)
  })
})

app.get('/pokemon/:id',(req,res) =>{
  db.select(req.params.id).from('pokemons').orderBy('id').then(function(data){
      res.send(data)
  })
})

app.listen(port, () => {
  console.log(`app listening on port: ${port}`)
})