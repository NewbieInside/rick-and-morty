import React from 'react';
import Card from '../Card/Card.js';
import './CardList.css';

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.characters.map((char) => {
        return <Card key={char.id} character={char} />;
      })}
    </div>
  );
};

export default CardList;


