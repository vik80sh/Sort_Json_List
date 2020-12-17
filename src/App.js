import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

import { withRouter } from "react-router-dom";

class App extends Component {

  constructor() {
    super();
    this.state = {
      sortBy: ""
    }
  }

  handleClickAge=()=>{
    this.setState({sortBy:"Age"});
    this.props.history.push("/age")
  }

  handleClickName=()=> {
    this.setState({sortBy:"Name"})
    this.props.history.push("/name")
  }

  handleClickPoints=()=> {
    this.setState({sortBy:"Points"})
    this.props.history.push("/points")
  }

  handleClickRank=()=> {
    this.setState({sortBy:"Rank"})
    this.props.history.push("/rank")
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age onClick={this.handleClickAge}></Age>
          <Name onClick={this.handleClickName}></Name>
          <Points onClick={this.handleClickPoints}></Points>
          <Rank onClick={this.handleClickRank}></Rank>
          <Table sortBy={this.state.sortBy}></Table>
        </div>
      </div>
    );
  }
}

export default withRouter(App)
