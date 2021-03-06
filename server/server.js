const express = require('express')
const app = express()
const port = 	4242
const db = require("./seed.js")
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/pokemon',(req,res) =>{
  db.select().from('pokemons').orderBy('id').then(function(data){
      res.send(data)
  })
})

app.post('/pokemon',(req,res) =>{
  db.insert({numero: req.body.numero, nom: req.body.nom}).into('pokemons')
  .then(() => {
    res.send(`le pokemon ${req.body.nom} à été ajouté`)
  })
})

app.get('/pokemon/:id',(req,res) =>{
  db.from('pokemons').where({ id: req.params.id }).then(function (data){
      res.send(data)
  });
})

app.delete('/pokemon/:id',(req,res) => {
  db.delete().from('pokemons').where({id: req.params.id})
  .then(() =>{
    res.send("Vous avez effacé un pokemon")
  })
})

app.listen(port, () => {
  console.log(`app listening on port: ${port}`)
})