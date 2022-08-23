import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { Publish, requestItemPOST as requestItem } from '../interfaces/meli';
import { AppContext } from '../lib/AppContext';
import Columns from './Columns';

const Publish = () => {
    
    const {authz} = useContext(AppContext);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<Publish | null>(null);
    
    const [price, setPrice] = useState(350);
    //const [picture, setPicture] = useState('http://mla-s2-p.mlstatic.com/968521-MLA20805195516_072016-O.jpg')
    const [picture, setPicture] = useState('https://www.enviado.com/wp-content/uploads/2021/09/Recurso-9enviado-1.png')

    const body:requestItem = {
        title: 'Item de test - No Ofertar',
        category_id: 'MLA3530',
        price: 350,
        currency_id: 'ARS',
        available_quantity: 10,
        buying_mode: 'buy_it_now',
        condition: 'new',
        listing_type_id: 'gold_special',
        sale_terms: [
            {
                'id': 'WARRANTY_TYPE',
                'value_name': 'Garantía del vendedor'
            },
            {
                'id': 'WARRANTY_TIME',
                'value_name': '90 días'
            }
        ],
        pictures: [
            {
                'source': 'http://mla-s2-p.mlstatic.com/968521-MLA20805195516_072016-O.jpg'
            }
        ],
        attributes: [
            {
                'id': 'BRAND',
                'value_name': 'Marca del producto'
            },
            {
                'id': 'EAN',
                'value_name': '7898095297749'
            }
        ],
        shipping: {
            local_pick_up : false,
            mode:'me1',
            dimensions : '10x10x20,700'
        }
    };

    const getApi = () => {

        body.price = price;
        body.pictures = [{source:picture}]

        fetch('/api/meli/publish?token=' + authz?.access_token ?? '', {
            method : 'POST',
            body : JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((data)=>setData(data))
        .catch((e)=>setError('Error obteniendo la info del vendedor ' + e))
        .finally(()=>setLoading(false));

    }

    const close = () => setData(null);
    
    if (error) return <div>Error</div>
    
    return (
        <div className='profile'>
            <div className="form">
                <h2>Publish an Item</h2>
                {
                    !data &&
                        <>
                            <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(+e.currentTarget.value)}></input>
                            <input type="text" placeholder='picture' value={picture} onChange={(e) => setPicture(e.currentTarget.value)}></input>
                            <button onClick={getApi}>Publish</button>
                        </>
                
                }

                {
                    data &&
                        <>
                            <h3>Published OK #{data.id}</h3>
                            <Image alt="thumbnail" src={data.secure_thumbnail} width={300} height={300}></Image>
                            <a href={data.permalink} target="_blank" rel="noopener noreferrer">Open Article</a>
                            {/* <Columns label="Date Created" value={data.date_created ? data.date_created.toDateString() : ''}></Columns> */} 
                            <Columns label="Status" value={data.status}></Columns>
                            <span>&nbsp;</span>
                            <button onClick={close}>Close</button>
                        </>
                }

                 {/* <div className='json'>
                    <pre>{JSON.stringify(data, null, 2) }</pre>
                </div>  */}
            </div>
        </div>
    )

}

export default Publish