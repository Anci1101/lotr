import React from 'react'
import useFetch from '../contexts/useFetch'
import {useParams} from 'react-router-dom'


const CharactersQoutes = () => {
    const {id} = useParams()
    const {data: quotes} = useFetch(`https://the-one-api.dev/v2/character/${id}/quote`)
    console.log(quotes,id,  'quotes');

    
    return (
        <div>
            hello
        </div>
    )
}

export default CharactersQoutes
