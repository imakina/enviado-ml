import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AppContext } from '../lib/AppContext'
import Status from './Status'
interface TokenInterface {
    grant:string,
}

const Token = (props:TokenInterface) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const {authz, setAuthz} = useContext(AppContext);

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
                if(data.access_token)
                    setAuthz(data);
                else
                    setError(data);
            })
            .catch((e)=>setError('Error obteniendo el token ' + e))
            .finally(()=>setLoading(false));
    }, []);

    useEffect(() => getAPI(props.grant), [getAPI]);

    const isError = () => (error !== '')

    return (
        <>
            {
                (authz?.access_token !== '') &&
                    <div className='access-codes'>
                        <div>UserID={authz?.user_id}</div>
                        <div>AccessToken={authz?.access_token}</div>
                        <div>ExpireTime={authz?.expires_in}</div>
                        { isError() && <label>{error}</label> }
                    </div>
            }
            <Status 
                label={'Token'}
                loading={loading}
                isActive={authz?.access_token !== ''} 
                actionTitle={'Refrescar'} 
                actionExecute={()=>getAPI(props.grant)} />
                
        </>
    )
}

export default Token