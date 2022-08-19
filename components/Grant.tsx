import React from 'react'
import Status from './Status'

interface GrantInterface {
    grant:string,
    getGrant:()=>void;
}

const Grant = (props:GrantInterface) => {

    const isActive = () => (props.grant !== '');

    return (
        <Status 
            label={'Usuario de MELI'}
            loading={false}
            isActive={isActive()} 
            actionTitle={'Autenticar'} 
            actionExecute={props.getGrant} />
    )
}

export default Grant