import React from 'react'
import "./ContactForm.css"
const ContactForm = () => {
  return (
    <>
      <div className='ContactForm-contents'>
          <div className='ContactForm-header'>
              <span>CONTACT US</span>
              <h4>Feel Free To Message Us</h4>
          </div>
          <div className = "form container">
            <form>
              <div class=" form1">
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" id="inputEmail4" placeholder="Your Name...." />
                </div>
                <div class="form-group col-md-6">
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                </div>
              </div>
              <div class="form-group form2">
                <input type="email" class="form-control " id="inputAddress" placeholder="Your Email..." />
                <input type="text" class="form-control " id="inputAddress" placeholder="Subject..." />
              </div> 
              <div class="form-row">
                <div class="form-group col-md-6">
                  <textarea rows="5" cols={1000} class="form-control text-area"  id=" " placeholder='Your Message' />
                </div>
               </div>
               <button className='homeHero-btn homeHero-btn-right financal-btn' >contact us</button>
            </form>
          </div>
          
      </div>
    </>
  )
}

export default ContactForm