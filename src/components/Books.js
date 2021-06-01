import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Books = () => {
    const {books, loading, error} = useContext(BookContext)
    console.log(books, 'data');
    return (
        <div>
            Books component
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {books && (books.map((item)=>(
                <div key={item._id}><p>{item.name}</p></div>
            )))}
            
        </div>
    )
}

export default Books
