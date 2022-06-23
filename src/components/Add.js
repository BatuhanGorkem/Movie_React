import React, { useState } from 'react'
import ResultCard from './ResultCard';
const Add = () => { 
const [query, setQuery] = useState(""); 
const [result, setResult] = useState([]);
  
const onChangeHandler =(e)=>{ 
    e.preventDefault(); 
    setQuery(e.target.value); 

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=943b84fa01c9c91d04062da79a7e9234&language=en-US&page=1&include_adult=false&query=${e.target.value}`) 
    .then(res=>res.json()) 
    .then(data=>{  
       setResult(data.results);
        console.log(data);
    }) 
    .catch(err=> console.log("error",err));
}
  return (
    <div className='add-page'> 
        <div className='add-container'> 
        <div className='add-content'>  
        <div className='input-wrapper'> 
     <input type="text" placeholder='Search for a movie' value={query} 
      onChange={onChangeHandler}
     /> 
     {result.length > 0 && ( 
                   <ul className='results'> 
                 {  
                 result.map(movie=>( 
                    <li key={movie.id}> 
                     <ResultCard movie={movie} />
                    </li>
                 ))
                 }
                   </ul>
     )}
    </div>
    
    </div>
    </div>
    </div> 
    
  )
}

export default Add