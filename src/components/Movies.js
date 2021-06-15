import React, { useContext, useState} from 'react'
import { MovieContext } from '../contexts/MovieContext'
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Container, Typography } from '@material-ui/core';


const Movies = () => {
    const {movies, loading, error} = useContext(MovieContext)

    const [selectedMovie, setSelectedMovie] = useState({})
    const [showMovieDetails, setShowMovieDetails] = useState(false)

    const handleMovieDetails = (id) => {
        const filteredMovie = movies.filter((item)=> id === item._id)
        console.log(filteredMovie[0]);
        setSelectedMovie(filteredMovie[0])
        setShowMovieDetails(true)
        
    }


    return (
        <Container>
            <Typography variant='h4' color='primary'>
                Movies
            </Typography>

            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <Grid container  spacing={3} style={{marginBottom:'20px', marginTop: 10}}>
                {movies && (
                    movies.map((movie)=>(
                    <Grid item key={movie._id} xs={12} md={6} lg={4}>
                        <Paper>
                            <MovieList 
                                movieId={movie._id}  
                                name={movie.name}
                                handleMovieDetails={handleMovieDetails}
                            />
                        </Paper>
                    </Grid>
                )))}
            </Grid>
            
            
            <Grid container>
                {showMovieDetails && (<Grid item xs={12} md={6} lg={4}>
                        <Paper>
                            <MovieDetails selectedMovie={selectedMovie}/>
                        </Paper>
                    </Grid>)}
            </Grid>
            

        </Container>
    )
}

export default Movies