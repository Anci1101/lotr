import useFetch from './useFetch'
import { createContext } from 'react';

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const {data: movies, loading, error} = useFetch('https://the-one-api.dev/v2/movie')
    console.log(movies);
    
    return(
        <MovieContext.Provider value={{movies, loading, error}}>
            {props.children}
        </MovieContext.Provider>
    )

}