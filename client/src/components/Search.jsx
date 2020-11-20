import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [distance, setDistance] = useState(0);

  const searchOurYelpAPI = async () => {
    try {
      console.log(query);
      const response = await axios.get(`/api/search?term=${query}`);
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {}
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchOurYelpAPI();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>What would you like to eat?</label>
        <input type="text" onKeyPress={handleChange}></input>
        <input type="submit"></input>
      </form>
      <div className="cards-container"></div>
    </div>
  );
};

export default Search;
