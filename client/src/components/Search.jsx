import React, { useState } from 'react';
import BusinessCard from './BusinessCard';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchOurYelpAPI = async () => {
    try {
      const response = await axios.get(`/api/search?term=${searchTerm}`);
      setSearchResults(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchOurYelpAPI();
  };
  return (
    <div>
      <h1 className="text-center">Wyncoders are Hella Hungry...</h1>
      <h2 className="text-center">
        ...But they don't know what they want to eat!
      </h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>What would you like to eat?</label>
          <input type="text" onKeyPress={handleChange}></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
      <div className="cards-container">
        {searchResults.map((business) => {
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

export default Search;
