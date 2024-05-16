import React from 'react'
import "./Footer.css"
import clint from "../../images/client-01.png"

const Footer = () => {
  return (
    <>
      <div className='footer-warpper'>
        <div className=''>
            <div className='container  footer-content-upper'>
              <div className='footer-car'>
                  <img draggable ="false" src={clint} alt='opps something went wrong'/>
              </div>
              <div className='footer-car'>
                  <img draggable ="false" src={clint} alt='opps something went wrong'/>
              </div>
              <div className='footer-car'>
                  <img draggable ="false" src={clint} alt='opps something went wrong'/>
              </div>
              <div className='footer-car'>
                  <img draggable ="false" src={clint} alt='opps something went wrong'/>
              </div>
              <div className='footer-car'>
                  <img draggable ="false" src={clint} alt='opps something went wrong'/>
              </div>
              <div className='footer-car'>
                  <img draggable ="false" src={clint} alt='opps something went wrong'/>
              </div>
            </div>
            <div className='footer-contnet-lower'>
                <div className='container  footer-footer'>
                    <h4>Copyright © 2022 Mexant Co., Ltd. All Rights Reserved.</h4>
                    <p>Designed by <span>TemplateMo</span></p>
                </div>
            </div>
        </div>
          
      </div>
    </>
  )
}

export default Footer