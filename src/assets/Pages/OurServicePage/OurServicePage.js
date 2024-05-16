import React from 'react'
import "./OurServicePage.css"
import OurServicePageHero from '../../../Componenets/OurServicePageHero/OurServicePageHero'
import OurServiceDigial from '../../../Componenets/OurServiceDigial/OurServiceDigial'
import ServiceFinnancial from '../../../Componenets/ServiceFinnancial/ServiceFinnancial'
import ServiceCryptocurrency from '../../../Componenets/ServiceCryptocurrency/ServiceCryptocurrency'
import HomeBuisnessSoluation from '../../../Componenets/HomeBuisnessSoluation/HomeBuisnessSoluation'
import ServiceUpgrade from '../../../Componenets/ServiceUpgrade/ServiceUpgrade'

const OurServicePage = () => {
  return (
    <>
      <div className='OurServicePage'>
          <OurServicePageHero/>
          <OurServiceDigial/>
          <ServiceFinnancial/>
          <ServiceCryptocurrency/>
          <HomeBuisnessSoluation/>
          <ServiceUpgrade/>
      </div>
    </>
  )
}

export default OurServicePage