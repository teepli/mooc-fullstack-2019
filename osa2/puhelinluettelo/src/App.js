import React, { useState, useEffect } from "react";
import FilterForm from "./components/FilterForm";
import SubmitForm from "./components/SubmitForm";
import Persons from "./components/Persons"
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then(res => setPersons(res.data))
      .catch(err => console.log(err.message))
  }, [])

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleNameAdd = e => {
    e.preventDefault();
    console.log(checkDoubles());
    if (checkDoubles().length !== 0) {
      alert(`${newName} is already in the phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    }
  };

  const checkDoubles = () => {
    return persons.filter(p => p.name === newName);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <FilterForm filter={filter} handleFilter={handleFilter} />
      <SubmitForm
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleNameChange={handleNameChange}
        handleNameAdd={handleNameAdd}
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons}/>
    </div>
  );
};

export default App;
