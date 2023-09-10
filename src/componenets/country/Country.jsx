import { useState } from 'react';
import './Country.css'

// recevie parameter
const Country = ({country,handledVisisted,handleVisistedFlag}) => {
  
    const {name, flags,capital,area, cca3} = country;

    
    const [visited, setVisited] = useState(false);
    const handleVisisted =()=>{
        setVisited(!visited)
    }
    
    const passWithParams =() =>{
        handledVisisted(country);

    }
    const handleFlag = () =>{
        handleVisistedFlag(country.flags.png);
    }
    return (
      
        <div className={`country ${visited? 'visited': 'npn-visited'}`}>
            <h3>Name : {name.common}</h3>
            <p>capital: {capital}</p>
            <p>area : {area}</p>
            <p>Code: {cca3}</p>
            <img src={flags.svg} alt="" className='img' />
             <br />
            <button onClick={handleVisisted}>{visited ? 'visited': "going"}</button>
            {visited && 'i have visited this country'}
            <button onClick={passWithParams}>mark as visited</button>
            <button onClick={handleFlag}>vsisted flag</button>
            
        </div>
            
  
      
    );
};

export default Country;