import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, {useState} from 'react'
import useFetch from '../contexts/useFetch';
import Characters from './Characters'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#ffffff'
    }
})

const CharactersList = () => {

    const classes = useStyles()
    const {data: characters} = useFetch('https://the-one-api.dev/v2/character?limit=100')
    const [raceOfCharacters, setRaceOfCharacters] = useState(characters)

    const handleCharactersRace = (race) =>{
        const filteredRaceOfCharacter = characters.filter((item)=>item.race===race)
        setRaceOfCharacters(filteredRaceOfCharacter)
    }
 

    return (
        <Container>
            <Typography variant='h4' color='primary'>Characters</Typography>
            <Grid container spacing={3} style={{marginTop:10}}>
                <Grid item>
                    <Button className={classes.btn} variant='outlined' onClick={()=> handleCharactersRace('Human')}>Human</Button>
                </Grid>
                <Grid item>
                    <Button className={classes.btn}  variant='outlined' onClick={()=> handleCharactersRace('Elf')}>Elf</Button>
                </Grid>
                <Grid item>
                    <Button className={classes.btn} variant='outlined' onClick={()=> handleCharactersRace('Hobbit')}>Hobbit</Button>
                </Grid>
                <Grid item>
                    <Button className={classes.btn} variant='outlined' onClick={()=> handleCharactersRace('Dwarf')}>Dwarf</Button>
                </Grid>
                
                
                
                
            </Grid>
            <div>
                <Characters raceOfCharacters ={raceOfCharacters}/>
            </div>
            
        </Container>
    )
}

export default CharactersList
