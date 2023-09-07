import React from 'react'
import ListePortfolio from '../../components/Portfolio/ListePortfolio'
import { Helmet } from 'react-helmet'

function Portfolio() {
    return (
      <>
      <Helmet>
      <title>Portfolio</title>
    </Helmet>
      <ListePortfolio/>
      </>
    )
  }
  
  export default Portfolio