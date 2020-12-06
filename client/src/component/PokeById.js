import React, { Component } from 'react'
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import axios from 'axios'

class PokeById extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading : true,
      pokemon : {}
    }
  }

  componentDidMount(){
    axios.get("http://localhost:4242/pokemon/" + this.route).then(res => {
      this.setState({
        loading : false,
        test : res.data
      })
    });
  }
  render(){
    if (this.state.loading === true){
      return <h1>J'ai essayer de toutes mes forces, pas reussi a tirer le Pokemon avec L':/id</h1>
    }
  return <h1>{this.state.pokemon.numero}</h1>
  }
}
export default PokeById











// import Pok from './Pok'

// function PokeById() {
   
//     let {id} = useParams();
//     return (
//       <div>
//         <h3>ID: {idNum}</h3>
//         <Pok idNum={id} />
//       </div>
//     );
//   }
// export default PokeById
