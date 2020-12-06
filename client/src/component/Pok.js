import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import { withRouter } from "react-router";
  
  class TaskDetail extends React.Component {
      componentDidMount() {
          const id = this.props.match.params.id;
          this.fetchData(id);
      }

      fetchData = id => {
      };

      render() {
      return <div>{id} YOOOO !!!</div>;
      }
  }

export default withRouter(TaskDetail);
