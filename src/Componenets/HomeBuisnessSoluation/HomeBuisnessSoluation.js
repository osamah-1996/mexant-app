import React from 'react'
import "./HomeBuisnessSoluation.css"
import "../../assets/images/cta-bg.jpg"


const HomeBuisnessSoluation = () => {
  return (
    <>
      <div className='HomeBuisnessSoluation-warpper'>
         <div className='HomeBuisness-contents container'>
              <div className='HomeBuisness-text'>
                  <h4>Business <span className='span-green'>Solutions</span> and <br/> <span className='span-red'>Crypto</span> Investments</h4>
              </div>
              <div className='HomeBuisness-btns'>
                  <button className='homeHero-btn homeHero-btn-left'>Discover More</button>
                  <button className='homeHero-btn homeHero-btn-right' >contact us</button>
              </div>
         </div>
      </div>
    </>
  )
}

export default HomeBuisnessSoluation