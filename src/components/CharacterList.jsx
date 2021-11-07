import React from 'react';
import CharacterCard from 'components/CharacterCard';

const CharacterList = ({characters}) => {
    return (
        <div className="character-card-list">
            <div className="container">
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default CharacterList;