import React from 'react'
import Slide1 from "../../assets/images/slide-01.jpg"
import Slide2 from "../../assets/images/slide-02.jpg"
import Slide3 from "../../assets/images/slide-03.jpg"
import "./HomeHero.css"

const HomeHero = () => {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Slide1} class="d-block w-100" alt="..."/>
                <div class="carousel-caption ">
                  <h5>Get <span>ready</span> for your buisness <br/> & upgrade <span>all aspects</span></h5>
                  <span className='hero-undrline'></span>
                  <p>Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can <br/> download and edit for any professional website. Thank you for visiting TemplateMo website.</p>
                  <div className='heroHome-btn'>
                      <button className='homeHero-btn homeHero-btn-left'>Discover More</button>
                      <button className='homeHero-btn homeHero-btn-right' >contact us</button>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Slide2} class="d-block w-100" alt="..." />
                <div class="carousel-caption ">
                  <h5><span>Digital</span>currancy for you <br/> & Best <span>Crypto</span>Tips</h5>
                  <span className='hero-undrline'></span>
                  <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one <br/> because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any <br/> purpose.</p>
                  <div className='heroHome-btn'>
                      <button className='homeHero-btn homeHero-btn-left'>Discover More</button>
                      <button className='homeHero-btn homeHero-btn-right' >contact us</button>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Slide3} class="d-block w-100" alt="..."/>
                <div class="carousel-caption ">
                  <h5>Best One in Town<br/> & crypto <span>Services</span></h5>
                  <span className='hero-undrline'></span>
                  <p>When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are <br/> responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>
                  <div className='heroHome-btn'>
                      <button className='homeHero-btn homeHero-btn-left'>Discover More</button>
                      <button className='homeHero-btn homeHero-btn-right' >contact us</button>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default HomeHero