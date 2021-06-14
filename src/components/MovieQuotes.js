import React from 'react'

const MovieQuotes = ({quotesOfMovie}) => {
    console.log(quotesOfMovie,'quotesOfMovie');
    return (
        <div>
            <h2>quotes of</h2>
            <div>
            {quotesOfMovie.map((quote)=>(
                <div key={quote._id}>
                    {/* <p>character:{quote.character}</p> */}
                    <p>quote:{quote.dialog}</p>
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default MovieQuotes
