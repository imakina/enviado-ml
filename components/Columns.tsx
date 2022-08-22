import React from 'react'

interface columnsInterface {
    label:string,
    value:string,
    selected?:(id:string)=>void;
}
const Columns = (props:columnsInterface) => {

    return (
        <div className='columns'>
            <div 
                className={props.selected?'label selected':'label'}
                onClick={()=>props.selected?.(props.value)}>{props.label}
            </div>
            <div className='value'>{props.value}</div>
        </div>
    )
}

export default Columns