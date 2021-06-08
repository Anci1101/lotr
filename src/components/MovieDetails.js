import React from 'react'

const MovieDetails = ({selectedMovie}) => {
    return (
        <div className='movie-back'>
            <h2>name: {selectedMovie.name}</h2>
            <p>academyAwardNominations: {selectedMovie.academyAwardNominations}</p>
        </div>
    )
}

export default MovieDetails
