import React from 'react'
import "./OurServiceDigial.css"
import OurServiceDigital1 from "../../assets/images/service-image-01.jpg"
import OurServiceDigital2 from "../../assets/images/service-image-02.jpg"
import OurServiceDigital3 from "../../assets/images/service-image-03.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from '@fortawesome/free-solid-svg-icons';

const OurServiceDigial = () => {
  return (
    <>
      <div className='OurServiceDigial-contents container'>
          <div className='OurServiceDigial-box'>
              <img src={OurServiceDigital1} alt='opps something went wrong'/>
          </div>
          <div className='OurServiceDigial-box OurServiceDigial-right'>
              <div className='Digital-icon'>
                 <FontAwesomeIcon class="faArchive" icon={faArchive} /> 
              </div>
              <div className='Digital-description'>
                  <h4>Digital Currencies</h4>
                  <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.</p>
                  <button className='homeHero-btn homeHero-btn-left'>Discover More</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default OurServiceDigial