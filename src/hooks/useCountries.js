import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');

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
  
  const filterCountries = () => {
    if (continent === 'all') return countries;
    return countries.filter((country) => country.continent === continent);
  };

  return { filterCountries, continent, setContinent, error };
}

