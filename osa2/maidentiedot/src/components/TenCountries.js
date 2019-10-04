import React, {useState} from 'react'
import OneCountry from './OneCountry';

export default function TenCountries(props) {
    const [showCountry, setShowCountry] = useState(false)
    const [country, setCountry] = useState()
    const handleShow = selectcountry => (e) => {
        e.preventDefault();
        setCountry(selectcountry)
        console.log(selectcountry)
        setShowCountry(!showCountry)
    }
    return (
      <div>
            {props.countries.map(c => {
                return country ? (
                  <OneCountry countries={country} />
                ) : (
                  <div>
                    <p>{c.name}</p> <button onClick={handleShow(`${c}`)}>show</button>
                  </div>
                );
            })}
      </div>
    );
}
