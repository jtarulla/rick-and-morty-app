import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import 'index.css'
import api from 'services/api';
import Header from 'components/Header';
import Filter from 'components/Filter';
import CharacterList from 'components/CharacterList';
import Pagination from 'components/Pagination';
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
  const [loading, setLoading] = useState()

  const getData = useCallback(
    async url => {
      try {
          if (typeof url === 'string') {
              setLoading(true)
              const response = await api.get(url);
              const data = response.data;
              setInfo(data.info);
              setCharacters(data.results);

              setTimeout(() => {
                setLoading(false);
              }, 400)
          }
      } catch (error) {
          searchField 
            ? toast.warn("We couldn't find the character. Please, try a different one.")
            : toast.error(error)

          setTimeout(() => {
            setLoading(false);
          }, 400)
      }
    }, [searchField]
  )

  const changeSearchField = event => {
    setSearchField(event);
  }

  const getFilteredData = () => {
    getData(`/character/?name=${searchField}`);
  } 

  useEffect(getFilteredData, [searchField, getData]);

  return (
    <div className="home">
      <Header />
      <Filter handleChange={changeSearchField} />
      <CharacterList loading={loading} characters={characters} />
      <Pagination loading={loading} handlePage={getData} info={info} />
    </div>
  );
}

export default HomePage;
