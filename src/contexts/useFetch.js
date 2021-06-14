 import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    const apiKey = "WNwaRvENaN0ZcHB2OyQ4";

    useEffect(() => {
        const abortCont = new AbortController()

            setTimeout(() => {
                fetch(url,
                { headers: { Authorization: 'Bearer ' + apiKey } },
                {signal: abortCont.signal})
                    .then(res =>{
                        console.log(res);
                        if(!res.ok) {
                            throw Error('could not fetch the data for that resource')
                        }
                        return res.json()
                    })
                    .then(data => {
                        setData(data.docs)
                        setLoading(false)
                        setError(null)
                    })
                    .catch(err => {
                        if (err.name === 'AbortError'){
                            console.log('fetch aborted');
                        }
                        else{
                            setLoading(false)
                            setError(err.message)
                        }
                        
                    })
            }, 1000);
        return () => abortCont.abort()
    }, [url])
    return {data, loading, error}
}
export default useFetch;


















