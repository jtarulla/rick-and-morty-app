import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from 'components/Header';
import Loading from 'components/Loading';
import api from 'services/api';
import backArrowSvg from 'assets/arrow-backward.svg'
import 'css/character-page.css'

const CharacterPage = () => {
    const [character, setCharacter] = useState({
        episode: [],
        gender: '',
        image: '',
        name: '',
        origin: { name: '' },
        species: '',
        status: ''
    });
    const { id } = useParams();
    const [loading, setLoading] = useState()

    const getCharacterData = useCallback(
        async () => {
            try {
                setLoading(true);
                const response = await api.get(`/character/${id}`);
                const data = response.data;
                setCharacter(data);

                setTimeout(() => {
                    setLoading(false);
                }, 400)
            } catch (error) {
                toast.error(error.message);

                setTimeout(() => {
                    setLoading(false);
                }, 400)
            }
        }, [id]
    )

    useEffect(() => getCharacterData(), [getCharacterData]);

    return (
        <div className="character-page">
            <Header />
            <div className="container">
                <Link to="/">
                    <div className="character-page--back">
                        <img src={backArrowSvg} alt="back-icon" />
                        Go Back
                    </div>
                </Link>
                <div className="character-page--detail">
                    <div className="character-page--photo">
                        {
                            loading ? 
                            <Loading
                                width={300}
                                height={300}
                                viewBox="0 0 250 200"
                            />
                            :
                            <img src={character.image} alt={character.name} />
                        }
                    </div>
                    <div className="character-page--info">
                        <h1 className="character-page--title">
                            {character.name}
                        </h1>
                        <p className="character-page--data">
                            <b>Origin name: </b>
                            {character.origin.name}
                        </p>
                        <p className="character-page--data">
                            <b>Species: </b>
                            {character.species}
                        </p>
                        <p className="character-page--data">
                            <b>Status: </b>
                            {character.status}
                        </p>
                        <p className="character-page--data">
                            <b>Gender: </b>
                            {character.gender}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterPage;