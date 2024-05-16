import React from 'react'
import "./AboutUSPage.css"
import AboutUSPageHero from '../../../Componenets/AboutUSPageHero/AboutUSPageHero'
import AboutUsPagePlanning from '../../../Componenets/AboutUsPagePlanning/AboutUsPagePlanning'
import HomeBuisnessSoluation from '../../../Componenets/HomeBuisnessSoluation/HomeBuisnessSoluation'
import AboutUsPageFeedBack from '../../../Componenets/AboutUsPageFeedBack/AboutUsPageFeedBack'

const AboutUSPage = () => {
  return (
    <>
      <div>
        <AboutUSPageHero/>
        <AboutUsPagePlanning/>
        <HomeBuisnessSoluation/>
        <AboutUsPageFeedBack/>
      </div>
    </>
  )
}

export default AboutUSPage