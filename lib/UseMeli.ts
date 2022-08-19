import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from './AppProvider';

const useMeli = () => {

    const router = useRouter()
    const { code } = router.query
    //TODO refactor el grant
    const grant: string = (typeof(code) == "string")?code:"";


    console.log('useMeli')

    if (grant == "")
        return [false, {}, "invalid grant"]

    // context
    // const appContext = useContext(AppContext);
    // let { user } = appContext;

    // const {
    //     axiosInstance,
    //     method,
    //     url
    // } = init;

    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {

        const doRequest = async () => {
            try {

                const url:string = '/api/token/' + grant ;
                debugger;
                fetch(url)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        setResponse(data)
                    })
                    .catch((e)=>{
                        console.log(e);
                    });

                //setResponse(data);

            } catch (error) {
                //setError(error)
            } finally {
                setLoading(false);
            }
        }

        doRequest();

    }, [])
  
    return [loading, response, error];
}

export default useMeli