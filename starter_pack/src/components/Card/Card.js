import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.characters.image} alt="cartoons"/>
      <h2>{props.characters.name}</h2>
      <p>{props.characters.species}</p>
      <p>{props.characters.gender}</p>
    </div>
  );
};

export default Card;
