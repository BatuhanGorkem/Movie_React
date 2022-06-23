import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({movie,type}) => { 

  const {removeMovietoWatchList,addMovieToWatched,moveToWatchlist,removeFromWatched} = useContext(GlobalContext); 

  return (
    <div className='inner-card-controls'>{  
        type==="watchlist"&&( 
            <>  
              <button className='ctrl-btn'> 
              <i className='fa-fw far fa-eye' onClick={()=>addMovieToWatched(movie)}>watched</i>
              </button> 
              <button className='ctrl-btn' onClick={()=>removeMovietoWatchList(movie.id)}> 
              <i className='fa-fw far fa-times'>Kaldır</i>
              </button>
            </>
        )
    } 
    
    {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash">Move</i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times">remove</i>
          </button>
        </>
      )}
    
    </div>
  )
}

export default MovieControls