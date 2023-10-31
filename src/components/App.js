import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Movies from './Movies';
import Directors from './Directors';
import Actors from './Actors';

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/directors" component={Directors} />
      <Route path="/actors" component={Actors} />
    </div>
  );
}

export default App;
