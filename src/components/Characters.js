import React from 'react'
// import {Link} from 'react-router-dom'

const Characters = ({raceOfCharacters}) => {

    
    return (
        <div className="characters-container">
            {raceOfCharacters.map((character)=>(
                <div  className="single-character" key={character._id}>
                    <h3>{character.name}</h3>
                    <p>{character.gender}</p> 
                    {/* <button onClick={()=>getQuotes()}>quotes</button> */}
                    {/* <Link to={`characters/${character._id}`}><button>click me</button></Link> */}
                        
                </div>
            ))}
        </div>
    )
}

export default Characters
