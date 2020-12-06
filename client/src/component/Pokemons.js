import React from 'react' 
import ReactDOM from 'react-dom'
import '../pokemon.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

class Pokemons extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        pokemon: null,
        pokemons_length: null,
        loading: true
      }
    } 
  
    async componentDidMount(){
    await fetch('http://localhost:4242/pokemon')
      .then(res => res.json())
      .then(data =>{
        this.setState({pokemons_length: data.length})
        this.setState({pokemon: data})
        this.setState({loading: false})

        console.log(this.state.pokemon)
      })
    await fetch('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png')
    .then(res => res.blob())
    .then(data =>{
      this.setState({pokemons_img: data})
    })
    }

    createPokeView(id, numero, nom){
    return (<div>
      id: {id} - numero:{numero} - nom: {nom}
    </div>)
    }
  
    render(){
      const lst = []
      let imgPoke;
      if (this.state.loading == false){
        for (let i = 0; i < this.state.pokemons_length; i++){

          let srcPoke = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.state.pokemon[i].numero}.png`
          let pokemon =
          <div>
            <div className="w3-container w3-quarter fond_pokemon info_Poke">
              <div>
                <img src={srcPoke}></img>
              </div>
              n°{this.state.pokemon[i].numero} - Nom: {this.state.pokemon[i].infos.nom}
            </div> 
          </div> 
          
          lst.push(pokemon)
          console.log(this.state.pokemon[2].id)
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
                <Route exact path="/pokemon/:id">
                    <div>En cours de développement</div>
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