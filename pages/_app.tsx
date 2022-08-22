import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContext } from '../lib/AppContext'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react';
import { auth } from '../auth/FirebaseConfig';
import { UserInterface } from '../interfaces/core';
import { jwt } from '../interfaces/meli';

function MyApp({ Component, pageProps }: AppProps) {

  const [user, setUser] = useState<UserInterface>({ 
    uid : '', 
    name: '', 
    email: '' 
  });

  const [meli, setMeli] = useState<jwt>({ 
    access_token: '',
    expires_in: 0,
    scope: '',
    token_type: '',
    user_id: 0
   });
  
  useEffect(() => {
    console.log('useeffect de auth')
    console.log('meli='+meli)
    const unsubscribe = auth.onAuthStateChanged((_user) => {
      console.log('unsuscribe de auth')
      if (_user) {
        const current = {..._user}
        setUser({
          uid:current.uid,
          name:current.displayName??'',
          email:current.email??'',
        });
      }
    });

    return unsubscribe;

  }, []);
  
  const appContextDefault = {
      user:user, 
      loading:false, 
      meli:meli, 
      setMeli: setMeli
    };

  return (
    <AppContext.Provider value={appContextDefault}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )

}

export default MyApp
