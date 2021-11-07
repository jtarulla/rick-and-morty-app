import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'index.css'
import api from 'services/api';
import CharacterList from 'components/CharacterList';
import Pagination from 'components/Pagination';
import Filter from 'components/Filter';
import Header from 'components/Header';
import 'css/character-card.css'
import 'css/pagination.css'
import 'css/filter.css'

const HomePage = () => {
  const [ characters, setCharacters ] = useState([]);
  const [info, setInfo] = useState({
    count: '',
    prev: '',
    next: '',
    page: '',
  });
  const [searchField, setSearchField] = useState('');

  const getData = async url => {
    try {
        if (typeof url === 'string') {
            const response = await api.get(url);
            const data = response.data;
            setInfo(data.info);
            setCharacters(data.results);
        }
    } catch (error) {
        searchField 
        ? toast.warn("We couldn't find the character. Please, try a different one.")
        : toast.error(error)
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {getData('/character/?page=0')}, []);

  const changeSearchField = event => {
    setSearchField(event);
    getFilteredData();
  }

  const getFilteredData = () => {
    getData(`/character/?name=${searchField}`);
  } 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getFilteredData, [searchField]);

  return (
    <div className="home">
      <Header />
      <Filter handleChange={changeSearchField} />
      <CharacterList characters={characters} />
      <Pagination handlePage={getData} info={info} />
    </div>
  );
}

export default HomePage;
