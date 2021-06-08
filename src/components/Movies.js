import React, { useContext, useState} from 'react'
import { MovieContext } from '../contexts/MovieContext'
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';

const Movies = () => {
    const {movies, loading, error} = useContext(MovieContext)
    console.log(movies, 'movies');

    const [selectedMovie, setSelectedMovie] = useState({})
    const [showMovieDetails, setShowMovieDetails] = useState(false)

    const handleMovieDetails = (id) => {
        console.log('anabanaan');
        const filteredMovie = movies.filter((item)=> id === item._id)
        // console.log(filteredMovie[0]);
        setSelectedMovie(filteredMovie[0])
        setShowMovieDetails(true)
    }


    return (
        <div>
            Movie component
            <h2>Movies</h2>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {movies && (movies.map((movie)=>(
                <div key={movie._id}>
                    <MovieList 
                        movieId={movie._id}  
                        name={movie.name}
                        handleMovieDetails={handleMovieDetails}
                    />
                </div>
            )))}
            <div>
                {showMovieDetails && (<div>
                    <MovieDetails selectedMovie={selectedMovie}/>
                    </div>)}
            </div>
            

        </div>
    )
}

export default Movies