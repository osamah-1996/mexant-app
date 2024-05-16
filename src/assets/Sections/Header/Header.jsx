import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../images/logo.png"

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container navbar-content">
          <a class="navbar-brand" href="#"><img src={Logo} alt="opps something went wrong" /></a>
          <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon class="navbar-toggler-icon" icon={faBars} /> 
            <span ></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link spicial" href="/">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#HomeServices-warpper">Services</a></li>
              <li class="nav-item"><a class="nav-link" href="#AboutUs-warpper">About</a></li> 
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/AboutUSPage">About Us</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="/OurServicePage">Our Services</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href= "/ContactPage">Contact Us</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#HomeTestimonial-wapper" >Testimonials</a>
              </li>
            </ul>
              <button class="contact-button ms-2" type="submit">Contact Support</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header