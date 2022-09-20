import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');
  
  
  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      console.log(data);
      setCountries(data);
      
    }
    fetchData();
  }, []);
  
  const filterCountries = () => {
    if (continent === 'all') return countries;
    return countries.filter((country) => country.continent === continent);
  };

  return { filterCountries, continent, setContinent };
}

