import React from 'react'

const CardCharacter = props => {
  const { name, image, species, type, gender, handleClickFavorite } = props;

  return (
    <div className="card__container__characters">
      <img src={image} alt="avatar" />
      <h2>{name}</h2>
      <h4>
        Species: <span>{species}</span>
      </h4>
      <h4>Gender: <span>{gender}</span></h4>
      {
        type && <h4>Type: <span>{type}</span></h4>
      }
      <button type="button" onClick={() => handleClickFavorite(props)}>add to favorites</button>
    </div>
  );
};

export default CardCharacter;
