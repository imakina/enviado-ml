
import Link from 'next/link';
import React, { useContext } from 'react'
import { AppContext } from '../lib/AppContext';
import { useContextApp } from '../lib/AppProvider';

const Header = () => {

    const value = useContext(AppContext);
    //const { user, meli } = useContextApp();
    const ml = 'https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=5342048874344752&redirect_uri=http://localhost:3000/mercadolibre&state='+(new Date).getTimezoneOffset();

    return (
        <div className='header'>
            <div className='image'>
                <img src={'/logo-green.png'} width={60} height={60} alt="logo"></img>
            </div>
            <div className="nav">
                <Link href={'/'}>Home</Link>
                <Link href={'demo'}>Demo</Link>
                <Link href={ml}>Mercado Libre</Link>

                { value.user ?
                    <>
                        <Link href={'logout'}>{value.user.email}</Link>
                    </>
                :
                    <>
                        <Link href={'login'}>Login</Link>
                         {/* <Link href={ml}>Login</Link>  */}
                    </>
                } 
            </div>

        </div>
  )
}

export default Header