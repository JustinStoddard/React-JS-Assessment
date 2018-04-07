import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NewBeers from './NewBeers';

class App extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path='/newbeers' component={NewBeers}/>
      </Switch>
    )
  }
}

export default App;