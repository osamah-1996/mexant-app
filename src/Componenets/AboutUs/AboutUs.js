import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <>
      <div className='AboutUs-warpper' id='AboutUs-warpper'>
        <div className='AboutUs-contenets container'>
          <div className='AboutUs-header'>
              <span>ABOUT US</span>
              <h4>Know Us Better</h4>
          </div>
          <div className='AboutUs-inner'>
              <div className='AboutUs-left'>
                  <div className='AboutUs-btns'>
                      <button className='AboutUs-btn'>Web Design</button>
                      <button className='AboutUs-btn'>Graphics</button>
                      <button className='AboutUs-btn'>Web Coding</button>
                      <button className='AboutUs-btn'>Machine Learning</button>
                  </div>
                  <div className='AboutUs-Table'>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Project Title</th>
                            <th>Budget</th>
                            <th>Deadline</th>
                            <th>Client</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="row">Graphics Redesign</td>
                            <td>$500 to $800</td>
                            <td>2022 Nov 24</td>
                            <td>Media One</td>
                          </tr>
                          <tr>
                            <td className="row">Digital Graphics</td>
                            <td>$1,500 to $3,000</td>
                            <td>2022 Nov</td>
                            <td>18 Second Media</td>
                          </tr> 
                          <tr>
                            <td className="row">New Artworks</td>
                            <td >$2,200 to $4,400</td>
                            <td>2022 Nov 10r</td>
                            <td>Artwork Push</td>
                          </tr>
                          <tr>
                            <td className="row">Complex Arts</td>
                            <td>$1,100 to $2,400</td>
                            <td >2022 Nov 3</td>
                            <td>Media One</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
              </div>
              <div className='AboutUs-right'>
                  <h4>Please tell us about your idea and how you want it to be</h4>
                  <p>You are allowed to use this template for your websites. You are NOT allowed to redistribute the template ZIP file on any other template websites.</p>
                  <p>Thank you for downloading and using our templates. Please tell your friends about our website.</p>
                  <button className='homeHero-btn homeHero-btn-left'>Discover More</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs