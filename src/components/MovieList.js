import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  });


const MovieList = ({name, movieId, handleMovieDetails}) => {
    const classes = useStyles();
    return (
        <Card elevation={5} className={classes.root}>
                <CardHeader title={name}/>
                    
                <CardActions>
                    <Button variant="outlined" size="small" onClick={()=>handleMovieDetails(movieId)}> Movie Details</Button>
                </CardActions>
                
            
        </Card>
    )
}

export default MovieList
