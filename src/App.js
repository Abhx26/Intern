import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import SearchBar from './SearchBar';

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => setBeers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar search={search} handleSearch={handleSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',backgroundColor:'black' }}>
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
