import React from 'react'


const BookChapters = ({chaptersOfOneBook}) => {
    // console.log(chaptersOfOneBook);
   
    return (
        <div>
            {chaptersOfOneBook.map((oneChapter)=>(
                <p>{oneChapter}</p>
            ))}
        </div>
    )
}

export default BookChapters
