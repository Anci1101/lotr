import { Grid, Paper } from '@material-ui/core';
import React from 'react'
import SingleCharacter from './SingleCharacter';

const Characters = ({raceOfCharacters}) => {
   
  
    return (
        <Grid container spacing={3} style={{marginTop:'10px'}}>
            {raceOfCharacters.map((character)=>(
                <Grid item key={character._id} xs={12} md={6} lg={4}>
                    <Paper>
                        <SingleCharacter name={character.name} gender={character.gender} id={character._id} />
                    </Paper>        
                </Grid>
            ))}
        </Grid>
    )
}

export default Characters
