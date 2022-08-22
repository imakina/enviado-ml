import React, { useContext, useEffect, useState } from 'react'
import { jwt, Profile } from '../interfaces/meli';
import { AppContext } from '../lib/AppContext';
import Columns from './Columns';


const Profile = () => {
    
    const { meli } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<Profile | null>(null);
    
    const getToken = () => {

        fetch('/api/meli/profile?token=' + meli?.access_token)
            .then((res) => res.json())
            .then((data)=>setData(data.profile))
            .catch((e)=>setError('Error obteniendo la info del vendedor ' + e))
            .finally(()=>setLoading(false));
    }

    useEffect(() => getToken(), []);
    
    if (error) return <div>Error</div>

    return (
        <div className='profile'>
            <div className="form">
                {
                    data &&
                    <div>
                        <h2>Profile #{data.id}</h2>
                        <Columns label="Nickname" value={data.nickname}></Columns>
                        <Columns label="Name" value={data.first_name}></Columns>
                        <Columns label="Address" value={data.address.address}></Columns>
                        <Columns label="City" value={data.address.city}></Columns>
                        <Columns label="Zipcode" value={data.address.zip_code}></Columns>
                    </div>
                }

                 {/* <div className='json'>
                    <pre>{JSON.stringify(data, null, 2) }</pre>
                </div>  */}
            </div>
        </div>
    )

}

export default Profile