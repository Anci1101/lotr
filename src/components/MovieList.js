import React from 'react'

const MovieList = ({name, movieId, handleMovieDetails}) => {
    return (
            <div key={movieId} className='movie-inner'>
                <div className='movie-front'>
                    <h4>{name}</h4>
                    <button className='btn' onClick={()=>handleMovieDetails(movieId)}> MovieList</button>
                </div>
            
        </div>
    )
}

export default MovieList
