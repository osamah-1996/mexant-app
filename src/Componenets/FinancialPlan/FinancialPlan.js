import React from 'react'
import "./FinancialPlan.css"
import FinnacialPlan from "../../assets/images/calculator-image.png"


const FinancialPlan = () => {
  return (
    <>
      <div className='FinancialPlan-wapper '>
        <div className='FinancialPlan-contents container'>
             <div className='FinancialPlan-box'>
                <img src={FinnacialPlan}/>
             </div>
             <div className='FinancialPlan-box'>
                <div className='FinnacialPlan-Header'>
                    <span>YOUR FREEDOM</span>
                    <h4>Get A Financial Plan</h4>
                </div>
                <form>
                  <div class="d-flex form-flex">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Your Name</label>
                      <input type="text" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Email</label>
                      <input type="email" class="form-control" id="inputPassword4"/>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">Subject</label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="form-group col-md-4 form-selction">
                      <label for="inputState">Your Reason</label>
                      <select id="inputState" class="form-control">
                        <option selected className='option p-2'>Choose on Option</option>
                        <option className='option p-2'>Online Banking</option>
                        <option className='option'>Finnancial Control</option>
                        <option className='option'>Yearly Profit</option>
                        <option className='option'>Crypto Investment</option>
                      </select>
                    </div>
                  </div>
                  <button className='homeHero-btn homeHero-btn-right financal-btn' >contact us</button>
                </form>
             </div>
        </div>
      </div>
    </>
  )
}

export default FinancialPlan