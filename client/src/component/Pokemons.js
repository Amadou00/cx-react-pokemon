import React from 'react' 
import ReactDOM from 'react-dom'

class Pokemons extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        //json: null,
        pokemon_id: null,
        pokemon_numero: null,
        pokemon_infos: null,
        loading: true
      }
    } 
  
    async componentDidMount(){

    await fetch('http://localhost:4242/pokemon')
      .then(res => res.json())
      .then(data =>{
        //this.setState({json: data})
        this.setState({pokemon_id: data[1].id})
        this.setState({pokemon_numero: data[1].numero})
        this.setState({pokemon_infos: data[1].infos.nom})
        //console.log(json)
      })
    };

    render(){
            return (
                <div>
                    <div className="w3-container w3-red w3-half App">
                        {this.state.pokemon_id || "no data"}
                        {this.state.pokemon_numero || "no data"}
                        {this.state.pokemon_infos || "no data"}
                    </div>
                </div>
            );
        }
}
  
export default Pokemons;