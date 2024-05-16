import React from 'react'
import "./ServiceUpgrade.css"
import ServiceUpgradeimg from "../../assets/images/service-details-01.jpg"

const ServiceUpgrade = () => {
  return (
    <>
      <div className='ServiceUpgrade-banner container'>
          <div className='ServiceUpgrade-header'>
             <span>INVESTMENT IN DETAILS</span>
             <h4>Upgrade Your Knowledge</h4>
          </div>
          <div className='ServiceUpgrade-buttons'>
              <button>Crypto Investments</button>
              <button>Cryptocurrency Market</button>
              <button>Financial Planning</button>
          </div>
          <div className='ServiceUpgrade-inner'>
              <div className='ServiceUpgrade-inner-box'>
                  <img src={ServiceUpgradeimg}/>
              </div>
              <div className='ServiceUpgrade-inner-box service-description'>
                  <h4>Learn more about cryptocurrency investments</h4>
                  <p>Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.</p>
                  <h6>- Top Crypto prices and charts</h6>
                  <h6>- Is Cryptocurrency a good investment?</h6>
                  <h6>- Crypto Market Insiders and News</h6>
               
              </div>
          </div>
       </div>
    </>
  )
}

export default ServiceUpgrade