import {useEffect, useState} from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
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
                        console.log(error);
                        setHasError(true);
                    }
                    finally{
                        setIsLoading(false);
                    }
                })();
            }
    }, [url]);

    return {data, isLoading, hasError};
}

export default useFetch;
