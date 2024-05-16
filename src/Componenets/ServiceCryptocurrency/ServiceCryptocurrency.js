import React from 'react'
import "./ServiceCryptocurrency.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import OurServiceDigital3 from "../../assets/images/service-image-03.jpg"

const ServiceCryptocurrency = () => {
  return (
    <>
      <div className='ServiceCryptocurrency-contenet container'>
      <div className='OurServiceDigial-box'>
              <img src={OurServiceDigital3} alt='opps something went wrong'/>
          </div>
          <div className='OurServiceDigial-box OurServiceDigial-right'>
              <div className='Digital-icon'>
                 <FontAwesomeIcon class="faArchive" icon={faArchive} /> 
              </div>
              <div className='Digital-description'>
                  <h4>Cryptocurrency Exchanges</h4>
                  <p>Mauris id efficitur ante, vitae ultrices metus. Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.</p>
                  <button className='homeHero-btn homeHero-btn-left'>Discover More</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default ServiceCryptocurrency