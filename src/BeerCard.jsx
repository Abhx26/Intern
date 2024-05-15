import React from 'react';

function BeerCard({ beer }) {
  return (
    <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '300px' }}>
      <h2>{beer.name}</h2>
      <img src={beer.image_url} alt={beer.name} style={{ height: '200px', width: '50px' }} />
      <p>{beer.tagline}</p>
      <p><b>ABV:</b> {beer.abv}</p>
    </div>
  );
}

export default BeerCard;
