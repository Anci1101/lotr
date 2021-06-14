import { Grid, Paper } from '@material-ui/core';
import React from 'react'
import useFetch from '../contexts/useFetch'
import CharactersQoutes from './CharactersQoutes';
import SingleCharacter from './SingleCharacter';

const Characters = ({raceOfCharacters}) => {
console.log(raceOfCharacters, 'raceOfCharacters');
    //const {name, gender, _id} = raceOfCharacters

    // const {data: quotes, loading, error} = useFetch(`https://the-one-api.dev/v2/character/` + _id + `/quote`)
    // console.log(quotes, 'quotes');

  
    return (
        <Grid container spacing={3} style={{marginTop:'10px'}}>
            {raceOfCharacters.map((character)=>(
                <Grid item key={character._id} xs={12} md={6} lg={4}>
                    <Paper>
                    <SingleCharacter name={character.name} gender={character.gender} id={character._id} />
                    </Paper>
                     
                    {/* <button onClick={()=>getQuotes()}>quotes</button> */}
                    {/* <Link to={`/character/${character._id}`}><button>click me</button></Link> */}
                    {/* <button onClick={()=>getCharacterQuotes(character._id)}>character quotes</button> */}
                        
                </Grid>
            ))}

            {/* <div>
                <CharactersQoutes getCharacterQuotes={getCharacterQuotes}/>
            </div> */}
        </Grid>
    )
}

export default Characters
