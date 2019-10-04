import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import FilterForm from "./components/FilterForm";
import OneCountry from './components/OneCountry';
import TenCountries from './components/TenCountries';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => setCountries(res.data))
      .catch(err => console.log(err.message));
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))

  const countriesToRender = () => {
    if (filteredCountries.length === 1) {
      return (
        <OneCountry countries={filteredCountries[0]}></OneCountry>
      )
    } else if (filteredCountries.length <= 10) {
      return (
        <TenCountries countries={filteredCountries}/>
      )
    } else {
      return <p>Too many matches, specify another filter</p>;
    }
  }
  console.log(filteredCountries)
  return (
    <div>
      <FilterForm handleFilter={handleFilter} filter={filter} />
      {countriesToRender()}
    </div>
  );
}

export default App;
