const fs = require("fs")

const regexTitres = /"(.+?)":/g
const erasedRegex = /[": ]/g
const pokedex = fs.readFileSync('./src/pokedex.json', "utf-8")

let totalTitles = pokedex.match(regexTitres)
let pokeTable = []
let attaqueTable = []
let attModified;
//On retire les doublons
let titres = Array.from(new Set(totalTitles))

titres.forEach(attribut => {
    //On retire les " et les :  
    attModified = attribut.replace(erasedRegex, '')

    switch (attModified){
        case 'niveau':
            attaqueTable.push(attModified)
            break
        case 'puissance':
            attaqueTable.push(attModified)
            break
        case 'precision':
            attaqueTable.push(attModified)
            break
        case 'pp':
            attaqueTable.push(attModified)
            break
        case 'attaques':
            break
        default:
            pokeTable.push(attModified)
            break
    }
})

console.log(attaqueTable)
module.exports = {attaqueTable, pokeTable}