import React, { useCallback, useContext, useEffect, useState } from 'react'
import { jwt } from '../interfaces/meli'
import { AppContext } from '../lib/AppContext'
import Status from './Status'

interface TokenInterface {
    grant:string,
    // jwt:jwt | null,
    // saveToken:(jwt:jwt)=>void
}

// const JWTDefault: jwt = {
//     access_token: '',
//     expires_in: 0,
//     scope: '',
//     token_type: '',
//     user_id: 0
// }

const Token = (props:TokenInterface) => {

    const [loading, setLoading] = useState(false);
    //const [jwt, setJwt] = useState<jwt>(JWTDefault)
    const [error, setError] = useState('');

    const {meli, setMeli} = useContext(AppContext);

    const getAPI = useCallback((grant:string) => {

        console.log('looking forward for a token');
        if (grant == '') {
            console.log('without grant');
            return;
        }
        
        setLoading(true);

        fetch('/api/meli/token?code=' + grant)
            .then((res) => res.json())
            .then((data)=> {
                console.log(data);
                if(data.access_token)
                    setMeli(data);
                else
                    setError(data);
            })
            .catch((e)=>setError('Error obteniendo el token ' + e))
            .finally(()=>setLoading(false));
    }, []);

    useEffect(() => getAPI(props.grant), [getAPI]);

    const isActive = () => (meli?.access_token !== '')

    const isError = () => (error !== '' && !isActive())

    return (
        <>
            {
                (meli?.access_token !== '') &&
                    <div className='access-codes'>
                        <div>UserID={meli?.user_id}</div>
                        <div>AccessToken={meli?.access_token}</div>
                        <div>ExpireTime={meli?.expires_in}</div>
                        <span></span> { isError() && <label>{error}</label> }
                    </div>
            }
            <Status 
                label={'Token'}
                loading={loading}
                isActive={isActive()} 
                actionTitle={'Refrescar'} 
                actionExecute={()=>getAPI(props.grant)} />


        </>
    )
}

export default Token