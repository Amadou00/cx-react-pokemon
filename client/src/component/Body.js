import React from 'react' 
import ReactDOM from 'react-dom'
import Pokemons from './Pokemons'
import '../pokemon.css'

const Body = () =>{
    return (
        <div>
            <header id="top_Bar">
                <div className="w3-right w3-margin">Réalisé par Adlane OULD MOHAND et Amadou KEITA</div>
                <img src="https://logo-marque.com/wp-content/uploads/2020/05/Pokemon-Logo.png" width="100"></img>
            </header>
            <Pokemons/>
        </div>
    )
}

export default Body