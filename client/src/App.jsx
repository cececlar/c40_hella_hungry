import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import axios from 'axios';

import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const callOurYelpAPI = async () => {
      try {
        const response = await axios.get('/api/yelp');
        setBusinesses(response.data);
      } catch (error) {}
    };

    callOurYelpAPI();
  }, []);

  return (
    <AppContextProvider>
      <div>
        {businesses.map((business) => {
          return (
            <div>
              <h1>{business.name}</h1>
              <img src={business.image_url} />
            </div>
          );
        })}
      </div>
    </AppContextProvider>
  );
};

export default App;
