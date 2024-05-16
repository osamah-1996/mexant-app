import React from 'react'
import "./AboutUsPagePlanning.css"
import AboutUsPagePlanningimg from "../../assets/images/about-left-image.jpg"

const AboutUsPagePlanning = () => {
  return (
    <>
      <div className='container AboutUsPagePlanning-warpper'>
          <div className='AboutPagePlanning-contents'>
              <div className='AboutPagePlanning-box AboutPagePlanning-box-left'>
                  <img src={AboutUsPagePlanningimg} alt='opps something went wrog' />
              </div>
              <div className='AboutPagePlanning-box AboutPagePlanning-box-right'>
                  <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header fs-5 fw-bold" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Mexant Financial Planning</button></h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div class="accordion-body">You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free.We do not ask you anything in return. You are free to use our templates for any purpose.</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Mexant Crypto Investing</button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body">Mexant HTML5 Template is available to download 100% free of charge. This CSS layout is based on Boostrap 5 framework.Anyone can edit and use this layout for all professional websites. Thank you for visiting TemplateMo website.</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Cryptocurrency Investments</button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div class="accordion-body">Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo.Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo. Mauris scelerisque venenatis justo, sed interdum sem.</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default AboutUsPagePlanning