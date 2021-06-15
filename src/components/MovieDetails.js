import React, {useState} from 'react'
import useFetch from '../contexts/useFetch'
import MovieQuotes from './MovieQuotes';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { Button, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 20
    },
    title: {
      fontSize: 14,
    },
  });

const MovieDetails = ({selectedMovie}) => {
    const classes = useStyles();

    const {data: movieQ} = useFetch(`https://the-one-api.dev/v2/movie/` + selectedMovie._id + `/quote`)
    

    const [quotesOfMovie, setQuotesOfMovie] = useState({})
    const [showMovieQuotes, setShowMovieQuotes] = useState(false)
    

    const getMovieQuotes = (id) => {
        const movieQuotes = movieQ.filter((quote)=>
            id === quote.movie
        )
        console.log(movieQuotes, 'movieQuotes');
        setQuotesOfMovie(movieQuotes)
        setShowMovieQuotes(true)
    }

    const closeQuotes = () => {
        setShowMovieQuotes(false)
    }

    
    

    return (
        <Card elevation={5} className={classes.root}>
            <CardHeader title={selectedMovie.name}/>
            <CardContent>
                <Typography>
                    Academy award nominations: {selectedMovie.academyAwardNominations}
                </Typography>
                <Typography>
                    Academy award wins: {selectedMovie.academyAwardWins}
                </Typography>
                <Typography>
                    Runtime: {selectedMovie.runtimeInMinutes} min
                </Typography>
            </CardContent>
            <CardActions>
                {showMovieQuotes ? (
                    <Button variant="outlined" size="small" onClick={()=> closeQuotes(selectedMovie._id)}>
                    close
                </Button>
                ):(
                    <Button variant="outlined" size="small" onClick={()=> getMovieQuotes(selectedMovie._id)}>
                    movie quotes
                </Button>
                )}

                
            </CardActions>
            
            <div>
                {showMovieQuotes && (
                    <div><MovieQuotes quotesOfMovie={quotesOfMovie}/></div>
                )}
            </div>
        </Card>
    )
}

export default MovieDetails
