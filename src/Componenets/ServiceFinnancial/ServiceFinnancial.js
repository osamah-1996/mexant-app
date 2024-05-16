import React from 'react'
import "./ServiceFinnancial.css"
import ServiceImage from  "../../assets/images/service-image-02.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from '@fortawesome/free-solid-svg-icons';
const ServiceFinnancial = () => {
  return (
    <>
      <div className='ServiceFinnancial-contents container'>
          <div className='ServiceFinnancial-box ServiceFinnancial-left'>
              <div className='Digital-icon'>
                 <FontAwesomeIcon class="faArchive" icon={faArchive} /> 
              </div>
              <div className='finnancial-description'>
                  <h4>Financial Solutions</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ex massa. In ac laoreet urna. Curabitur eu enim nibh. Phasellus sodales nisi vel leo aliquam, ut tempus augue hendrerit. Pellentesque eu risus tincidunt, condimentum eros in, auctor augue. Vivamus et urna blandit, varius sapien sed.</p>
                  <button className='homeHero-btn homeHero-btn-left'>Discover More</button> 
             </div>
          </div>
          <div className='ServiceFinnancial-box'>
              <img src={ServiceImage}/>
          </div>
          
      </div>
    </>
  )
}

export default ServiceFinnancial