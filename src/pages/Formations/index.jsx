import React from 'react'
import ListeFormations from '../../components/Formations/ListeFormations'
import {Helmet} from "react-helmet"

function Formations() {
    return (
      <>
      <Helmet>
      <title>Formations</title>
    </Helmet>
      <ListeFormations/>
      </>
    )
  }
  
  export default Formations