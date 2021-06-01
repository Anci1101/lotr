import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
const Home = () => {
    const {books} = useContext(BookContext)
    return (
        <div>
            Home component
            {books.map((item)=>(
                <div key={item._id}><p>{item.name}</p></div>
            ))}
        </div>
    )
}

export default Home
