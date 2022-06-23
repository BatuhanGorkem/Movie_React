import React from 'react' 
import { useContext } from 'react'; 
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ({movie}) => {
  
  const {addMovieToWatchList,watchlist}= useContext(GlobalContext);
  
  let storedMovie = watchlist.find(o=>o.id===movie.id); 
 
 

  const watchlistDisabled= storedMovie ? true:false; 

    return (
    
        <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className="filler-poster" />
          )}
        </div>   
        <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
          
            {movie.release_date ? movie.release_date: "-"};
          </h4>
        </div>

        </div>  
        <div className='controls'> 
         <button disabled={watchlistDisabled} onClick={()=> addMovieToWatchList(movie)} className='btn'> Add to Watchlist</button>
        </div>
        </div> 
  );
};

export default ResultCard