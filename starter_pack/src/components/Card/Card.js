import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.character.image} alt="rick n morty"/>
      <h2>{props.character.name}</h2>
      <p>{props.character.species}</p>
      <p>{props.character.gender}</p>
    </div>
  );
};

export default Card;
