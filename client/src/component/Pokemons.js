import React from 'react' 
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Body from "./Body";
import PokeItem from "./PokeItem"

class Pokemons extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        pokemon_infos: [],
        pokemon: null,
        //json: null,
        // pokemon_id: null,
        // pokemon_numero: null,
        pokemon_length: null,
        loading: true
      }
    } 
  
    async componentDidMount(){
    await fetch('http://localhost:4242/pokemon')
      .then(res => res.json())
      .then(data =>{
        this.setState({pokemon_length: data.length})
        // this.setState({pokemon_id: data.id})
        // this.setState({pokemon_numero: data.numero})
        this.setState({pokemon: data})
        this.setState({loading: false})


        // for(let i = 0; i < data.length; i++){
          
        //   lst.push(this.createPokeView(this.state.pokemon_id, this.state.pokemon_numero, this.state.pokemon_infos))
        // }
        console.log(this.state.pokemon)
      })
    };

    createPokeView(id, numero, nom){
    return (<div>
      id: {id} - numero:{numero} - nom: {nom}
    </div>)
    
    }
  
    render(){
      const lst = []
      if (this.state.loading == false){
        for (let i = 0; i < 142; i++){
          let pokemon = <div>
            id: {this.state.pokemon[i].id} - numero:{this.state.pokemon[i].numero} - nom: {this.state.pokemon[i].infos.nom}
          </div> 
          lst.push(pokemon)
          console.log(this.state.pokemon[2].id)
        }
            return (
              <Router>
              <Switch>
                <Route exact path="/pokemon">
                <div id="test">
                    <div className="w3-container w3-red w3-half App">

                      {lst}
                        {/* {this.state.pokemon_id || "no data"}-
                        {this.state.pokemon_numero || "no data"}-
                        {this.state.pokemon_infos || "no data"} */}
                    </div>
                </div>
                </Route>
                <Route exact path="/pokemon/:id">
                    <div>Ce n'est pas m'as parti</div>
                </Route>
              </Switch>
          </Router>
            );
        }
        else{
          return(<div>...</div>)
      }
      }

}
  
export default Pokemons;