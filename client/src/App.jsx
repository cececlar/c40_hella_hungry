import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
