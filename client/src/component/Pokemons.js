import React from 'react' 
import ReactDOM from 'react-dom'

class Pokemons extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        //json: null,
        pokemon : null,
        loading: true
      }
    } 
  
    async componentDidMount(){

    await fetch('http://localhost:4242/pokemon')
      .then(res => res.json())
      .then(data =>{
        //this.setState({json: data})
        this.setState({pokemon: data[1].infos.nom})
        //console.log(json)
      })
    };

    // descriptionPoke() {
    //     array.forEach(element => {       
    //     });
    // }

    render(){
            return (
                <div>
                    <div className="w3-container w3-red w3-half">
                        {this.state.json || "no data"}
                    </div>
                </div>
            );
        }
}
  
export default Pokemons;