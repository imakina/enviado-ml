import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContext } from '../lib/AppContext'
import Layout from '../components/Layout'
import useFirebaseAuth from '../auth/FirebaseAuth';
import { useEffect, useState } from 'react';
import { auth } from '../auth/FirebaseConfig';
import { UserInterface } from '../lib/interfaces';

function MyApp({ Component, pageProps }: AppProps) {

  //const {user,loading} = useFirebaseAuth();
  const [user, setUser] = useState<UserInterface>({ uid : '', name: '', email: '' });
  const [meli, setMeli] = useState('');
  
  useEffect(() => {
    console.log('useeffect de auth')
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
