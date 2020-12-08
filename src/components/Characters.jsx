import React, { useState, useEffect, useReducer } from "react";
import CardCharacter from "./CardCharacter";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  console.log("FAV:", favorites);
  const getCharacters = async () => {
    const urlBase = `https://rickandmortyapi.com/api/character`;
    try {
      const res = await fetch(urlBase);
      const { results } = await res.json();
      setCharacters(results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickFavorite = (favorite) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: favorite,
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return <div>
    {favorites.favorites.length ? (
      <>
        <h2>Favorites</h2>
        <div className="characters__container">
          {favorites.favorites.map((favorite, i) => (
            // <li key={favorite.id}>
            //   {favorite.name}
            //   <br/>
            // </li>
            <CardCharacter {...favorite} key={favorite.id} />
          ))}
          <br />
        </div>
      </>
    ) : (
      null
    )}
    <div>
      <h2>Characters</h2>
      <div className="characters__container">
        {characters.map((data) => (
          <CardCharacter
            {...data}
            key={data.id}
            handleClickFavorite={handleClickFavorite}
          />
        ))}
      </div>
    </div>
  </div>
};

export default Characters;
