import React from 'react'

const MovieList = ({name, movieId, handleMovieDetails}) => {
    return (
        <div key={movieId}>
           <h4>{name}</h4>
           <button onClick={()=>handleMovieDetails(movieId)}> MovieList</button> 
        </div>
    )
}

export default MovieList
