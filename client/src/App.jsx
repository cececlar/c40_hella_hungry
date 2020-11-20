import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import NavBar from './components/NavBar';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
