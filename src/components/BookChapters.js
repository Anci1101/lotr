import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../contexts/useFetch'

const BookChapters = () => {
    const {id} = useParams()
    const {data: chapters, loading, error} = useFetch(`https://the-one-api.dev/v2/book/` + id + `/chapter`)
    console.log(chapters, 'chapters');
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {chapters.map((item)=>(
                <div key={item._id}>

                    <p>{item.chapterName}</p>
                    </div>

            ))}
        </div>
    )
}

export default BookChapters
