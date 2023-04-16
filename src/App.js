import './App.css';
import {useState, useEffect} from "react";
import Countries from './Countries';
import Navigation from './Navigation';
import Filter from './Filter';
import Search from './Search';
import Loading from './Loading';
import CountryDetail from './CountryDetail';
function App() {
  const [countries, setCountries] = useState([]);
  const [displayCountries, setDisplayCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const fetchData = async() => {
    setIsLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    setDisplayCountries(data);
    setIsLoading(false);
    console.log(data[0])
  }
  useEffect(()=> {
    fetchData();

  }, [])
  const handleClick = (region) => {
    if (region !== "all") {
      const filteredCountries = countries.filter((country) => country.region === region);
      setDisplayCountries(filteredCountries);
    }
  }
  const handleChange = (event) => {
    setQuery(event.target.value);
    if (query === "") {
      setDisplayCountries(countries);
    } else {
      let filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()));
      setDisplayCountries(filteredCountries);
    }
    
  }
  const handleDetail = async(name) => {
    const country = await countries.find((country) => country.name.common === name);
    setSelectedCountry(country);
  }
  const handleBack = () => {
    setSelectedCountry(null);
  }
  if (isLoading) {
    return <Loading />
  }  else if (selectedCountry) {
    return <CountryDetail handleBack={handleBack} country={selectedCountry} />
  } else {
    return (
      <div className="App">
        <Navigation />
        <section className="filter-section d-flex flex-column flex-md-row justify-content-between">
          <Search handleChange={handleChange}  />
          <Filter handleClick={handleClick} />
        </section>
        <Countries handleDetail={handleDetail} countries={displayCountries}  />
      </div>
    );
  }
  
}

export default App;
