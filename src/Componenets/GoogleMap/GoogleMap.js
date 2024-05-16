import React from 'react'
import "./GoogleMap.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
const GoogleMap = () => {
  return (
    <>
      <div className='GoogleMapcontents container'>
         <div className='GoogleMap-img'>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96714.68291250926!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nowy%20Jork%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1672242259543!5m2!1spl!2spl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             </div>
         </div>
         <div className='googleMap-description'>
              <div className='googleMap-item'>
                  <FontAwesomeIcon class="googleMap-icons" icon={faEnvelope} /> 
                  <h4>Email Address</h4>
                  <span>info@company.com</span>
              </div>
              <div className='googleMap-item'>
                  <FontAwesomeIcon class="faPhone" icon={faPhone} /> 
                  <h4>Phone Number</h4>
                  <span>010-020-0340</span>
              </div>
              <div className='googleMap-item'>
                  <FontAwesomeIcon class="faLocation" icon={faLocation} /> 
                  <h4>Address</h4>
                  <span>Victoria, Australia</span>
              </div>
         </div>
      </div>
    </>
  )
}

export default GoogleMap