import React, {useState, useEffect} from 'react';
import CardCharacter from './CardCharacter';

const Characters = () => {
  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    const urlBase = `https://rickandmortyapi.com/api/character`;
    try {
      const res = await fetch(urlBase);
      const {results} = await res.json();
      setCharacters(results)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getCharacters()
  }, []);

  return (
    <div className="characters__container">
      {
        characters.map(data => (
          <CardCharacter
            key={data.id}
            {...data}
          />
        ))
      }
    </div>
  );
};

export default Characters;

