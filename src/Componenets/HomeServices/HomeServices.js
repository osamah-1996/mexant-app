import React from 'react'
import "./HomeServices.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faArchway } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';
const HomeServices = () => {
  return (
    <>
      <div className='HomeServices-warpper container' id='HomeServices-warpper'>
          <div className='HomeService-contents'>
              <div className='HomeService-card'>
                  <div className='HomeService-card-img'>
                     <FontAwesomeIcon class="faArchive" icon={faArchive} /> 
                  </div>
                  <div className='HomeService-card-text'>
                       <h3>CSS Templates</h3> 
                       <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                  </div>
              </div>
              <div className='HomeService-card'>
                  <div className='HomeService-card-img'>
                     <FontAwesomeIcon class="faCloud" icon={faCloud} /> 
                  </div>
                  <div className='HomeService-card-text'>
                       <h3>HTML5 Web Pages</h3> 
                       <p>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
                  </div>
              </div>
          </div>
          <div className='HomeService-contents'>
              <div className='HomeService-card'>
                  <div className='HomeService-card-img'>
                     <FontAwesomeIcon class="faChargingStation" icon={faChargingStation} /> 
                  </div>
                  <div className='HomeService-card-text'>
                       <h3>Responsive Designs</h3> 
                       <p>All of our CSS templates are 100% free to use for commercial or business websites.</p>
                  </div>
              </div>
              <div className='HomeService-card'>
                  <div className='HomeService-card-img'>
                     <FontAwesomeIcon class="faSuitcase" icon={faSuitcase} /> 
                  </div>
                  <div className='HomeService-card-text'>
                       <h3>Mobile and Tablet ready!</h3> 
                       <p>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
                  </div>
              </div>
          </div>
          <div className='HomeService-contents'>
              <div className='HomeService-card'>
                  <div className='HomeService-card-img'>
                     <FontAwesomeIcon class="faArchway" icon={faArchway} /> 
                  </div>
                  <div className='HomeService-card-text'>
                       <h3>Fast Customer Support</h3> 
                       <p>Do not be hesitated to contact us if you have any question or concern about our templates.</p>
                  </div>
              </div>
              <div className='HomeService-card'>
                  <div className='HomeService-card-img'>
                     <FontAwesomeIcon class="faPuzzlePiece" icon={faPuzzlePiece} /> 
                  </div>
                  <div className='HomeService-card-text'>
                       <h3>Fully Customizable</h3> 
                       <p>If you have any idea or suggestion about new templates, feel free to let us know.</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default HomeServices