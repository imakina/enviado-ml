import React, { useContext, useEffect, useState } from 'react'
import { requestItemPUT } from '../interfaces/meli';
import { AppContext } from '../lib/AppContext';

interface ItemInterface {
    item_id : string
}

const defaultItem:requestItemPUT = {
    title : '',
    category_id : '',
    price : 0,
    currency_id : '',
    available_quantity: 0,
    buying_mode: '',
    condition: '',
    sale_terms: [],
    pictures: [],
    attributes: [],
    shipping: {
        mode: 'not_specified',
        dimensions: '10x10x20,700',
        local_pick_up: false
    },
}

const Item = (props:ItemInterface) => {
    
    const { meli } = useContext(AppContext);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<requestItemPUT>(defaultItem);
    
    const [dimensions, setDimensions] = useState('10x10x20,700');
    const [title, setTitle] = useState('Item de test - No Ofertar');
    const [category, setCategory] = useState('MLA3530');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('350');
    const [link, setLink] = useState('');

    const url = '/api/meli/item?token=' + (meli?.access_token ?? '') + '&item='+props.item_id;

    const putAPI = () => {

        const body:requestItemPUT = {
            title : title,
            category_id : category,
            price : +price,
            currency_id : data.currency_id,
            available_quantity : data.available_quantity,
            buying_mode : data.buying_mode,
            condition : data.condition,
            sale_terms : data.sale_terms,
            pictures : data.pictures,
            attributes : data.attributes,
            shipping : {
                mode :'me1',
                dimensions : dimensions,
                local_pick_up : false
            }
        }

        fetch(url, {
            method : 'POST',
            body : JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((data)=>setData(data))
        .catch((e)=>setError('Error obteniendo la info del item ' + e))
        .finally(()=>setLoading(false));

    }

    const getAPI = () => {

        fetch(url, { method : 'GET' })
        .then((res) => res.json())
        .then((data)=>{
            //full structure
            setData(data);
            //
            setPrice(data.price);
            setDimensions(data.shipping.dimensions);
            setTitle(data.title);
            setCategory(data.category_id);
            setLink(data.permalink);
        })
        .catch((e)=>setError('Error obteniendo la info del item ' + e))
        .finally(()=>setLoading(false));

    }

    // retrieve the item from ML
    useEffect(() => getAPI(), []);
    
    const close = () => setData(defaultItem);
    
    if (error) return <div>Error</div>

    return (
        <div className='profile'>
            <div className="form">
                <h2>Item - #{props.item_id} &nbsp; <a href={link} target="_blank" rel="noopener noreferrer">Open</a></h2>
                {
                    (data.title !== '') &&
                        <>
                            <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.currentTarget.value)}></input>
                            <input type="text" placeholder='description' value={''} onChange={(e) => setDescription(e.currentTarget.value)}></input>
                            <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.currentTarget.value)}></input>
                            <input type="text" placeholder='category' value={category} onChange={(e) => setCategory(e.currentTarget.value)}></input>
                            <input type="text" placeholder='dimensions' value={dimensions} onChange={(e) => setDimensions(e.currentTarget.value)}></input>
                            <button onClick={putAPI}>Update</button>
                        </>
                
                }

                {/* {
                    data &&
                        <>
                            <h3>Published OK #{data.id}</h3>
                            <img src={data.secure_thumbnail} width={300} height={300}></img>
                            <a href={data.permalink} target="_blank" rel="noopener noreferrer">Open Article</a>
                            <Columns label="Status" value={data.status}></Columns>
                            <span>&nbsp;</span>
                            <button onClick={close}>Close</button>
                        </>
                } */}

                 <div className='json'>
                    <pre>{JSON.stringify(data, null, 2) }</pre>
                </div> 
            </div>
        </div>
    )

}

export default Item