import Image from 'next/image';
import Link from 'next/link'
import React, { useContext } from 'react'
import { AppContext } from '../lib/AppProvider';

const Header = () => {

    const appContext = useContext(AppContext);
    let { user, loading} = appContext;

    return (
        <div className='header'>
        <div className='image'>
            <Image src={'/logo-green.png'} width={60} height={60} alt="logo"></Image>
        </div>
        <div className="nav">
            <Link href={'/'}>Home</Link>
            <Link href={'addproduct'}>Add Product</Link>
            { user.email !== '' &&
                <>
                    <Link href={'logout'}>{user.email}</Link>
                </>
            }
            { user.email === '' &&
                <>
                    <Link href={'login'}>Login</Link>
                    {/* <Link href={ml}>Login</Link> */}
                </>
            }
        </div>
        {/* <div className='user'> */}
            {/* <label>{user.uid}</label> */}
            {/* <label>{user.name}</label> */}
        {/* </div> */}

    </div>
  )
}

export default Header