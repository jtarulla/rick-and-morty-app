import React from 'react';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';

const CharacterCard = ({
    name,
    id,
    image,
    loading
}) => {
    return (
        <>
            {
                loading ? <Loading />
                :
                <Link to={`/character/${id}`}>
                    <div className="character-card">
                        <div className="character-card--photo">
                            <img src={image} alt={name} />
                        </div>
                        <div className="character-card--title">{name}</div>
                    </div>
                </Link>
            }
        </>
    );
}

export default CharacterCard;