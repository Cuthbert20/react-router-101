import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import House from './Components/House'
import NotFound from './Components/NotFound'

import './App.css';

class App extends Component {
  state = {
    house: null,
    mainColor: '',
    secondaryColor: ''
  }
  updateHouseInfo = (newStateObj) => {
    this.setState(newStateObj)//state is always an obj
  }
  render(){
    return(
      <HashRouter>
        <div className="App" >
          <h1>Hogwars School</h1>
          <Switch>
          <Route exact path='/' component={() => (
            <Home updateHouseInfo={this.updateHouseInfo} />
          )} />
          <Route path='/about' component={About} />
          <Route path='/house/:name' component={() => (
            <House 
            mainColor={this.state.mainColor}
            secondaryColor={this.state.secondaryColor} />
          )} />
          <Route component={NotFound}/>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
