import React, { useState, useEffect } from 'react';
import BusinessCard from './BusinessCard';
import axios from 'axios';

const Home = () => {
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
    <div className="container">
      <h1 className="text-center">Wyncoders are Hella Hungry!</h1>
      <h2 className="text-center">
        "What do you want for lunch?" "Idk...what's close?"
      </h2>
      <div className="cards-container">
        {businesses.map((business) => {
          return (
            <div key={business.id}>
              <BusinessCard business={business} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
