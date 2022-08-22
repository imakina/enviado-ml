import React, { useContext, useEffect, useState } from 'react'
import { AuthInterface } from '../interfaces/core';
import { Orders } from '../interfaces/meli';
import { AppContext } from '../lib/AppContext';
import Columns from './Columns';

interface OrdersInterface {
    select: (id_item :string) => void;
}

const Orders = (props: OrdersInterface) => {
    
    const {authz, setAuthz} = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<Orders | null>(null);
    
    useEffect(() => {
        
        const getAPI = (authz:AuthInterface) => {

            fetch('/api/meli/orders?token=' + authz?.access_token +'&id=' + authz?.user_id)
                .then((res) => res.json())
                .then((data)=> setData(data))
                .catch((e)=>setError('Error obteniendo la data ' + e))
                .finally(()=>setLoading(false));
        
        }

        getAPI(authz)

    }, []);
    
    if (error) return <div>Error</div>

    const items = (id:string,idx:number) => {
        return (
            <Columns
                key={idx}
                value={id}
                label={`# ${(idx+1).toString()}`} 
                selected={props.select}></Columns>
        )
    }

    return (
        <div className='me'>
            <div className="form">
                <h2>Orders Availables</h2>
                    <div>
                        {   
                            data &&                     
                            data.results.map(items)
                        }
                    </div>
                 {/* <div className='json'>
                    <pre>{JSON.stringify(data, null, 2) }</pre>
                </div>  */}
            </div>
        </div>
    )

}

export default Orders