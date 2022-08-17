import { useContext } from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { AppContext } from '../lib/AppProvider'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>

      <Header />

      <main className={styles.main}>

      </main>

    </div>
  )
}

export default Home
