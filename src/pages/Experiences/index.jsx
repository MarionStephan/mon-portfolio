import React from 'react'
import ListeExperiences from '../../components/Experiences/ListeExperiences'
import {Helmet} from "react-helmet"

function Experiences() {
    return (
      <>
      <Helmet>
      <title>Expériences Professionnelles</title>
    </Helmet>
      <ListeExperiences/>
      </>
    )
  }
  
  export default Experiences