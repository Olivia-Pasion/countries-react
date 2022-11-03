import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';
import './Main.css';

export default function Main() {
  const { filterAndSortCountries, continent, setContinent, sort, setSort } = useCountries();

  return (
    <main>
      <h1>Country Flags</h1>
      <label>Select Continent</label>
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
      <label>Sort</label>
      <select
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value='none'>none</option>
        <option value='A-Z'>A-Z</option>
        <option value='Z-A'>Z-A</option>
      </select>
      {filterAndSortCountries().map((country) => (
        <CountryCard className="country" key={country.name} {...country} />
      ))}
    </main>
  );
}
