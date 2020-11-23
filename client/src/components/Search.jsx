import React, { useState } from 'react';
import BusinessCard from './BusinessCard';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchOurYelpAPI = async () => {
    try {
      const response = await axios.get(`/api/search?term=${searchTerm}`);
      if (response.data.length !== 0) {
        setSearchResults(response.data);
      } else {
        setErrorMessage(
          'data:image/jpeg;base64,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'
        );
      }
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
          <input required type="text" onKeyPress={handleChange}></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
      <div className="cards-container">
        {errorMessage ? (
          <div className="no-results">
            <img src={errorMessage} alt="nothing-here" />
          </div>
        ) : (
          searchResults.map((business) => {
            return (
              <div key={business.id}>
                <BusinessCard business={business} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Search;
