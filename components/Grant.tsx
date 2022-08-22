import React from 'react'
import Status from './Status'

interface GrantInterface {
    grant:string,
    getGrant:()=>void;
}

const Grant = (props:GrantInterface) => {

    const isActive = () => (props.grant !== '');

    return (
        <>
            <div className="access-codes">
                <span>Grant={props.grant}</span>
            </div>

            <Status 
                label={'User'}
                loading={false}
                isActive={isActive()} 
                actionTitle={'Autenticar'} 
                actionExecute={props.getGrant} />
        </>
    )
}

export default Grant