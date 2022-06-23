import { createContext, useEffect, useReducer } from "react";
import React from "react";  
import AppReducer from "./AppReducer"; 


//initial State 

const initialState={ 
    watchlist:localStorage.getItem("watchlist")? JSON.parse(localStorage.getItem("watchlist")):[], 
    watched:localStorage.getItem("watched")? JSON.parse(localStorage.getItem("watched")):[],
}; 

//createContext 

export const GlobalContext = createContext(initialState); 

//provider 

export const GlobalProvider =({children})=>{ 

const [state, dispatch] = useReducer(AppReducer, initialState);  

useEffect(() => {
  
  localStorage.setItem("watchlist",JSON.stringify(state.watchlist)); 
  localStorage.setItem("watched",JSON.stringify(state.watched));
  
}, [state])


//Actions 
 const addMovieToWatchList =(movie)=>{ 
    dispatch({type:"ADD_MOVİE",payload:movie})
 }
const removeMovietoWatchList=(id)=>{ 
dispatch({type:"DELETE_MOVİE",payload:id})
} 
const addMovieToWatched=(movie)=>{ 
    dispatch({type:"WATCHED_MOVİE",payload:movie})
    } 
const moveToWatchList =(movie)=>{ 
    dispatch({type:"MOVE_TO_WATCHLİST",payload:movie})
} 
const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

return ( 
    <GlobalContext.Provider value={{watchlist:state.watchlist,watched:state.watched,addMovieToWatchList,removeMovietoWatchList,addMovieToWatched,moveToWatchList,removeFromWatched}}> 
        {children}
    </GlobalContext.Provider>
)
}