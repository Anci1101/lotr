import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import { MovieContext } from '../contexts/MovieContext'
const Home = () => {
    const {books} = useContext(BookContext)
    const {movies} = useContext(MovieContext)
    return (
        <div>
            Home component
            <div>
                <h2>Books</h2>
                {books.map((item)=>(
                    <div key={item._id}><p>{item.name}</p></div>
                ))}
            </div>

            <div>
                <h2>Movies</h2>
                {movies.map((item)=>(
                    <div key={item._id}><p>{item.name}</p></div>
                ))}
            </div>

            
        </div>
    )
}

export default Home
