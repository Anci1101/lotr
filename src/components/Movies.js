import React, { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'

const Movies = () => {
    const {movies, loading, error} = useContext(MovieContext)
    console.log(movies, 'movies');
    return (
        <div>
            Movie component
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {movies && (movies.map((item)=>(
                <div key={item._id}><p>{item.name}</p></div>
            )))}

        </div>
    )
}

export default Movies