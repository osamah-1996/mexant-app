import React from 'react'
import "./AboutUsPageFeedBack.css"

const AboutUsPageFeedBack = () => {
  return (
    <>
      <div className='AboutUsPageFeedBack-contents container'>
          <div className='AboutUsPageFeedBack-box About-us-lef'>
              <h4>Please tell us about your idea and how you want it to be</h4>
              <p>If you need more HTML templates, you can try visiting TooCSS blog and Tooplate websites. You can get many good templates on those websites.</p>
              <p>Nulla non placerat neque, a gravida elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sed dolor condimentum tellus commodo volutpat non malesuada turpis.</p>
              <button className='homeHero-btn homeHero-btn-left'>Discover More</button>
          </div>
          <div className='AboutUsPageFeedBack-box About-us-right'>
                <div className='About-us-right-box'>
                    <div className='About-us-right-content'>
                        <div className='About-us-right-sub-box'>
                            <div className='About-us-right-subheader'>
                                <h4>First Step</h4>
                                <span>01</span>
                            </div>
                            <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                        </div>
                        <div className='About-us-right-sub-box'>
                            <div className='About-us-right-subheader'>
                              <h4>Second Step</h4>
                              <span>02</span>
                            </div>
                            <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                        </div>
                    </div>
                    <div className='About-us-right-content'>
                        <div className='About-us-right-sub-box'>
                            <div className='About-us-right-subheader'>
                                <h4>Thired Step</h4>
                                <span>03</span>
                            </div>
                            <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                        </div>
                        <div className='About-us-right-sub-box'>
                            <div className='About-us-right-subheader'>
                              <h4>Fourth Step</h4>
                              <span>04</span>
                            </div>
                            <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                        </div>
                    </div>
                </div>
          </div>
      </div>
    </>
  )
}

export default AboutUsPageFeedBack