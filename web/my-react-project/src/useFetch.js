import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => {
                console.log(response)
                if(!response.ok){
                    response.log(response.status)
                    throw Error('Could not fetch the data for that resource')
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setError(null)
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }, [url])

    return {data, error}
}

export default useFetch