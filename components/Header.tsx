
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { AppContext } from '../lib/AppContext';

const Header = () => {

    const value = useContext(AppContext);
    //const { user, meli } = useContextApp();
    const ml = 'https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=5342048874344752&redirect_uri=http://localhost:3000/mercadolibre&state='+(new Date).getTimezoneOffset();

    return (
        <div className='header'>
            <div className='brand'>
                <>
                    <Image src={'/logo.png'} width={60} height={60} alt="logo"></Image>
                    <div>enviado.com ME1</div>
                </>
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