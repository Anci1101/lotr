import React from 'react'
import {Link} from 'react-router-dom'

const BookList = ({name, id}) => {
    
    return (
        <div>
            
            <Link to={`/book/${id}`}>
                    <div>
                        <p>{name}</p>
                    </div>
                 </Link>
        </div>
    )
}

export default BookList
