import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';

export default function Main() {
  const { filterCountries, continent, setContinent } = useCountries();

  return (
    <main>
      <select
        value={continent}
        onChange={(e) => {
          setContinent(e.target.value);
        }}
      >
        <option value='all'>all</option>
        <option value='South America'>South America</option>
        <option value='Oceania'>Oceania</option>
        <option value='Europe'>Europe</option>
        <option value='Africa'>Africa</option>
        <option value='North America'>North America</option>
        <option value='Asia'>Asia</option>
        <option value='Antarctica'>Antarctica</option>
      </select>
      {filterCountries().map((country) => (
        <CountryCard className="country" key={country.name} {...country} />
      ))}
    </main>
  );
}
