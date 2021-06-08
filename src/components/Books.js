import { Link } from '@material-ui/core';
import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookList from './BookList';

const Books = () => {
    const {books, loading, error} = useContext(BookContext)
    console.log(books, 'data');
    return (
        <div>
            Books component
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {books && (books.map((item)=>(
                // <Link to={`/book/${item._id}`}>
                //     <div key={item._id}>
                //         <p>{item.name}</p>
                //     </div>
                // </Link>
                <div key={item._id}>
                    <BookList name={item.name} id={item._id}/>
                </div>
            )))}
            
        </div>
    )
}

export default Books
