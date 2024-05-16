import React from 'react'
import "./HomePage.css"
import HomeHero from '../../../Componenets/HomeHero/HomeHero'
import HomeServices from '../../../Componenets/HomeServices/HomeServices'
import HomeBuisnessSoluation from '../../../Componenets/HomeBuisnessSoluation/HomeBuisnessSoluation'
import AboutUs from '../../../Componenets/AboutUs/AboutUs'
import FinancialPlan from '../../../Componenets/FinancialPlan/FinancialPlan'
import HomeTestimonial from '../../../Componenets/HomeTestimonial/HomeTestimonial'

const HomePage = () => {
  return (
    <div >
      <HomeHero/>
      <HomeServices/>
      <HomeBuisnessSoluation/>
      <AboutUs/>
      <FinancialPlan/>
      <HomeTestimonial/>
    </div>
  )
}

export default HomePage