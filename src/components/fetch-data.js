import {useEffect, useState, useRef} from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current){
            if(url){
                (async () => {
                    setIsLoading(true);
                    setHasError(false);
                    try {
                        const response = await fetch(url);
                        if (response.ok){
                            const resData = await response.json();
                            // setData((prevData)=> [resData, ...prevData]);
                            setData(resData);
                        }
                        else{
                            throw Error("Error fetching posts!");
                        }
                    }
                    catch (error) {
                        setHasError(true);
                    }
                    finally{
                        setIsLoading(false);
                    }
                })();
            }
        }
        else{
            didMount.current = true;
        }
    }, [url]);

    return {data, isLoading, hasError};
}

export default useFetch;
