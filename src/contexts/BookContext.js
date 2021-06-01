import useFetch from './useFetch'
import { createContext } from 'react';

export const BookContext = createContext()

export const BookProvider = (props) => {
    const {data: books, loading, error} = useFetch('https://the-one-api.dev/v2/book')
    console.log(books);
    
    return(
        <BookContext.Provider value={{books, loading, error}}>
            {props.children}
        </BookContext.Provider>
    )

}