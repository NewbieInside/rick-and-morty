import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <h2>{props.characters.name}</h2>
      <p>{props.characters.species}</p>
      <p>{props.characters.gender}</p>
    </div>
  );
};

export default Card;
