import React from 'react'
import Presentation from '../../components/Home/Presentation'
import Stack from '../../components/Home/ListeStack'
import { Helmet } from 'react-helmet'

function Home() {
    return (
      <>
      <Helmet>
        <title>Marion Stéphan - Portfolio</title>
      </Helmet>
      <Presentation/>
      <Stack/>
      </>
    )
  }
  
  export default Home