import React, { useEffect, useState } from 'react'
import { jwt } from '../interfaces/meli'
import Status from './Status'

interface TokenInterface {
    grant:string,
    jwt:jwt | null,
    saveToken:(jwt:jwt)=>void
}

const JWTDefault: jwt = {
    access_token: '',
    expires_in: 0,
    scope: '',
    token_type: '',
    user_id: 0
}

const Token = (props:TokenInterface) => {

    const [loading, setLoading] = useState(false);
    const [jwt, setJwt] = useState<jwt>(JWTDefault)
    const [error, setError] = useState('');

    const getAPI = () => {

        console.log('looking forward for a token');
        if (props.grant == '') {
            console.log('without grant');
            return;
        }
        
        setLoading(true);

        fetch('/api/meli/token/' + props.grant)
            .then((res) => res.json())
            .then(tokenSucess)
            .catch((e)=>setError('Error obteniendo el token ' + e))
            .finally(()=>setLoading(false));
    }

    const tokenSucess = (data: jwt | string) => {
        if(typeof data !== "string") {
            props.saveToken(data);
            console.log(data.access_token);
            setJwt(data);
        } else
            setError(data);
    }

    useEffect(() => getAPI(), []);

    const isActive = () => (jwt.access_token !== '')

    const isError = () => (error !== '' && !isActive())

    return (
        <>
            <Status 
                label={'Token'}
                loading={loading}
                isActive={isActive()} 
                actionTitle={'Refrescar'} 
                actionExecute={getAPI} />

            {
                (jwt.access_token !== '') &&
                    <div className='jwt'>
                        <div>{jwt.user_id}</div>
                        <div>{jwt.access_token}</div>
                        <div>{jwt.expires_in}</div>
                        <span></span> { isError() && <label>{error}</label> }
                    </div>
            }
        </>
    )
}

export default Token