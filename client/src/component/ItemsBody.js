import React, {Component} from "react"
import axios from "axios"

class ItemsBody extends Component {
    componentDidMount(){
        axios.get('/server/server.js').then(response =>{
            console.log(response)
        })
    }
    render() {
        return(
            <div>Hello !</div>
        )
    }
}

export default ItemsBody