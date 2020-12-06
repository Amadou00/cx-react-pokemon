const { default: ItemsBody } = require("./ItemsBody")
const { default: TopNav } = require("./TopNav")


function App() {
  return (
    <div>
    <TopNav />
    <div className = "container">
     <ItemsBody />
    </div> 
    </div> )
}

export default App;
