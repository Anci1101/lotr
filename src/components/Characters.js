import React from 'react'

const Characters = ({raceOfCharacters}) => {
    return (
        <div>
            {raceOfCharacters.map((character)=>(
                <div key={character._id}>{character.name}</div>
            ))}
        </div>
    )
}

export default Characters
