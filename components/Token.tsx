import { isReactNative } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import Status from './Status'

interface TokenInterface {
    grant:string,
    saveToken:(jwt:string)=>void
}

interface JWTInterface {
    access_token: string
    expires_in: number
    scope: string
    token_type: string
    user_id: number
}

const JWTDefault: JWTInterface = {
    access_token: '',
    expires_in: 0,
    scope: '',
    token_type: '',
    user_id: 0
}

const Token = (props:TokenInterface) => {

    const [loading, setLoading] = useState(false);
    const [jwt, setJwt] = useState<JWTInterface>(JWTDefault)
    const [error, setError] = useState('');

    const getToken = () => {

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

    const tokenSucess = (data: JWTInterface | string) => {
        if(typeof data !== "string") {
            props.saveToken(data.access_token);
            console.log(data.access_token);
            setJwt(data);
        } else
            setError(data);
    }

    useEffect(() => getToken(), []);

    const isActive = () => (jwt.access_token !== '')

    const isError = () => (error !== '' && !isActive())

    return (
        <>
            <Status 
                label={'Token'}
                loading={loading}
                isActive={isActive()} 
                actionTitle={'Refrescar'} 
                actionExecute={getToken} />

            {
                (jwt.access_token !== '') &&
                    <div className='jwt'>
                        <label>user:</label><div>{jwt.user_id}</div>
                        <label>jwt:</label><div>{jwt.access_token?.substring(1,40)}</div>
                        <label>expire:</label><div>{jwt.expires_in}</div>
                        <span></span> { isError() && <label>{error}</label> }
                    </div>
            }
        </>
    )
}

export default Token