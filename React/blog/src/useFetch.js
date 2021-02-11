import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState((null));

    useEffect(() => {
        setTimeout(() => { /* Simulate load time*/
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        console.log(res);
                        throw Error('Could not fetch the data for that ressource');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsPending(false);
                    console.log(err.message);
                });
        }, 1000);
    }, [url]);

    return ({
        data: data,
        isPending: isPending,
        error: error
    });
}

export default useFetch;