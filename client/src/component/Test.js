// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Test from './Test';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <React.StrictMode>
//       <div>test</div>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

//   reportWebVitals();

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Body from "./Body";
import PokeById from "./PokeById"

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  return (
    <Router>

        <Switch>
          <Route exact path="/pokemon">
              <h1>Netflix</h1>
          </Route>
          <Route exact path="/pokemon/:id" children = {<PokeById />}>
              <Body/>
              <PokeById />
          </Route>
        </Switch>

    </Router>
  );
}

// function PokeById() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }