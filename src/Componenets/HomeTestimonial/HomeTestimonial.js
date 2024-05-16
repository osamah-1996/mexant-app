import React from 'react'
import "./HomeTestimonial.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Testimonial from "../../assets/images/testimonials-01.jpg"

const HomeTestimonial = () => {
  return (
    <>
      <div className='HomeTestimonial-wapper container' id='HomeTestimonial-wapper'>
          <div className='HomeTestimonial-conent'>
              <div className='HomeTestimonial-header'>
                  <span>TESTIMONIALS</span>
                  <h4>What They Say</h4>
              </div>
              <div className='HomeTestimonial-box'>
                  <div className='HomeTestimonial-description'>
                      <FontAwesomeIcon class="faQuoteLeft" icon={faQuoteLeft} /> 
                      <p>ou are allowed to use this template for your websites. You are NOT allowed to redistribute the template ZIP file on any, Thank you for downloading and using our templates.</p>
                      <h2>Davied Andrew</h2>
                      <span>CEO of Mexant</span>
                  </div>
                  <div className='HomeTestimonial-img'>
                      <img src = {Testimonial} />
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default HomeTestimonial