import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = () => {
    const [country, setCountry] = useState([]);
    // visited country statae
    const [visited, setVisited] = useState([]);
    // visited country flag state
    const [flags, setFlages] = useState([])



    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    // visisted country name selelted
  
    const handledVisisted = country =>{
      const newVisitedCountries = [...visited, country];
      setVisited(newVisitedCountries)
    }

    //  visisted country flag seleted

    const handleVisistedFlag = flag =>{
        console.log('add visisted flag');
        const newVisistedflag = [...flags,flag]
        setFlages(newVisistedflag)
    }

    // remove item from an array in a state









    return (
        <div >
            <h3>Countries: {country.length}</h3>
            <div>
            <h4>VISITED COUNTRIES: {visited.length}</h4>
            <ol>
                {
                    visited.map(country => <li key={country.cca3}>{country.name.common}</li>)
                  
                }

            </ol>

            </div>
            <div>
                {
                   flags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
      
{/* country pass */}
            <div className="country-container">
            {
            country.map(count => <Country key={count.cca3} handledVisisted={handledVisisted} 
                handleVisistedFlag={handleVisistedFlag} country={count}></Country>)
        }

            </div>
       
        </div>
    );
};

export default Countries;