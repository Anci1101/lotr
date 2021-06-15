import React from 'react'


const BookChapters = ({chaptersOfOneBook}) => {
    return (
        <div>
            {chaptersOfOneBook.map((oneChapter)=>(
                <p key={oneChapter}>{oneChapter}</p>
            ))}
        </div>
    )
}

export default BookChapters
