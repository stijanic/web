import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState((null));

    useEffect(() => {
        const abortController =new AbortController();

        setTimeout(() => { /* Simulate load time*/
            fetch(url, {signal: abortController.signal})
                .then(res => {
                    if (!res.ok) {
                        console.log(res);
                        throw Error('Could not fetch the data for that ressource');
                    }
                    return(res.json());
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setError(err.message);
                        setIsPending(false);
                        console.log(err.message);
                    }
                });
        }, 100); // set the wait time

        return(() => {
            //console.log('cleanup');
            abortController.abort();
        });
    }, [url]);

    return ({
        data: data,
        isPending: isPending,
        error: error
    });
}

export default useFetch;