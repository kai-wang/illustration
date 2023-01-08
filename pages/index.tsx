import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Banner></Banner>
      <Footer></Footer>
    </>
  )
}

export default Home
