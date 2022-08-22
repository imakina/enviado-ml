
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { AppContext } from '../lib/AppContext';

const Header = () => {

    const {user} = useContext(AppContext);
    const ml = 'https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id='+process.env.NEXT_PUBLIC_ML_CLIENT_ID+'&redirect_uri='+process.env.NEXT_PUBLIC_ML_CLIENT_REDIRECT_URI+'&state='+(new Date).getTimezoneOffset();
    //console.log(ml)
    return (
        <div className='header'>
            <Head>
                <title>enviado-ml</title>
            </Head>
            <div className='brand'>
                <>
                    <Image src={'/logo.png'} width={50} height={50} alt="logo"></Image>
                </>
            </div>
            <div className="nav">
                { user?.email ?
                    <>
                        <Link href={'/'}>Home</Link>
                        <Link href={ml}>MercadoLibre</Link>
                        <Link href={'logout'}>{user.email}</Link>
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

// export async function getStaticProps() {
//     const db = await myDB.connect({
//       host: process.env.DB_HOST,
//       username: process.env.DB_USER,
//       password: process.env.DB_PASS,
//     })
// }