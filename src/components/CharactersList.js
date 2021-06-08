import React, {useState} from 'react'
import useFetch from '../contexts/useFetch';
import Characters from './Characters'


const CharactersList = () => {
    const {data: characters, loading, error} = useFetch('https://the-one-api.dev/v2/character')
    console.log(characters, 'char');
    const [raceOfCharacters, setRaceOfCharacters] = useState(characters)

    const handleCharactersRace = (race) =>{
        const filteredRaceOfCharacter = characters.filter((item)=>item.race===race)
        setRaceOfCharacters(filteredRaceOfCharacter)
    }

    return (
        <div>
            <h2>character</h2>
            {/* {characters.map((character)=>
                <div key={character._id}>{character.race}</div>
            )} */}
            <div>
                <button onClick={()=> handleCharactersRace('Human')}>human</button>
                <button onClick={()=> handleCharactersRace('Elf')}>elf</button>
                <button onClick={()=> handleCharactersRace('Hobbit')}>hobbit</button>
                <button onClick={()=> handleCharactersRace('Dwarf')}>dwarf</button>
            </div>
            <div>
                <Characters raceOfCharacters ={raceOfCharacters}/>
            </div>
        </div>
    )
}

export default CharactersList
