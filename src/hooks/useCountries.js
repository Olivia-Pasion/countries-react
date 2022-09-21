import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  // general app state
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');

  // sort state
  const [sort, setSort] = useState('none');


  // error state
  const [error, setError] = useState('');
  
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch {
        setError('Something went wrong');
      }
    }
    fetchData();
  }, []);
  
  const filterAndSortCountries = () => {
    let countriesArray = [...countries];
    if (continent !== 'all') {
      countriesArray = countriesArray.filter((country) => country.continent === continent);
    }
    
    if (sort === 'A-Z') {
      countriesArray.sort((a, b) => 
        a.name.localeCompare(b.name, 'en', { ignorePunctuation: true })
      );
    } 
    if (sort === 'Z-A') {
      countriesArray.sort((a, b) =>
        b.name.localeCompare(a.name, 'en', { ignorePunctuation: true })
      );
    }
    return countriesArray; 
  };

  
  return { filterAndSortCountries, continent, setContinent, error, setSort };
}


