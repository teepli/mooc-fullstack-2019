import React from 'react'

export default function OneCountry(props) {
    const {name, capital, population, languages, flag} = props.countries
    return (
      <div>
            <h1>{name}</h1>
            <div>Capital: {capital}</div>
            <div>Population: {population}</div>
            <hr></hr>
            <h3>Languages</h3>
            <ul>
                {languages.map(lan => <li>{lan.name}</li>)}
            </ul>
            <img src={flag} style={{height: '10%', width: '10%', marginLeft: '1%'}}></img>
      </div>
    );
}
