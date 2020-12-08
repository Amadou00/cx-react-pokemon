import React from 'react' 
import ReactDOM from 'react-dom'
import '../pokemon.css'
import PokeById from './PokeById'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const queryString = require('query-string');

class Pokemons extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        pokemons: null,
        pokemons_length: null,
        loading: true
      }
    } 
  
    async componentDidMount(){
    await fetch('http://localhost:4242/pokemon')
      .then(res => res.json())
      .then(data =>{
        this.setState({pokemons_length: data.length})
        this.setState({pokemons: data})
        this.setState({loading: false})
      })
    await fetch('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png')
    .then(res => res.blob())
    .then(data =>{
      this.setState({pokemons_img: data})
    })
    }
  
    render(){
      const lst = []
      if (this.state.loading == false){
        for (let i = 0; i < this.state.pokemons_length; i++){

          let srcPoke = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.state.pokemons[i].numero}.png`
          let pokemon =
          <div>
            <div className="w3-container w3-quarter fond_pokemon info_Poke">
              <div>
                <img src={srcPoke}></img>
              </div>
              n°{this.state.pokemons[i].numero} - Nom: {this.state.pokemons[i].infos.nom}
            </div> 
          </div> 
          
          lst.push(pokemon)
        }
            return (
              <Router>
              <Switch>
                <Route exact path="/">
                  <div className="w3-margin fond_pokemon">
                    {lst}
                  </div>
                </Route>
                <Route exact path="/pokemon">
                  <div className="w3-margin fond_pokemon">
                    {lst}
                  </div>
                </Route>
                <Route exact path="/pokemon/:id" children>
                    <div>{      console.log(window.location.search)} En cours</div>
                </Route>
              </Switch>
          </Router>
            );
        }
        else{
          return(<h1>...loading</h1>)
      }
      }

}
  
export default Pokemons;