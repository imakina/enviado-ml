import React from 'react'

interface StatusInterface {
    label:string,
    loading:boolean,
    isActive:boolean,
    actionTitle:string,
    actionExecute:()=>void
}


const Status = (props:StatusInterface) => {
  return (
    <div className='status'>
        <div className={props.isActive?'active':'inactive'}>&nbsp;</div>
        <div>{ props.label }</div>
        <div>{ props.loading && <span><img src={'loading.svg'} alt='loading' width={60} height={60} /> </span>}</div>
        <button onClick={props.actionExecute}>{props.actionTitle}</button>
    </div>
  )
}

export default Status