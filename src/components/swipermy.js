/* eslint-disable */
//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react';
//import Swiper from 'react-id-swiper';

// core version + navigation, pagination modules:
import SwiperCore, { Autoplay, Scrollbar, A11y } from 'swiper';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "gatsby"
import 'swiper/swiper-bundle.css';
import '../styles/swiper/css/swiper.css'
import '../styles/swiper/css/swipercustom.css'
import '../styles/bootstrap.css'


import '../styles/layout.css'
import '../styles/custom.css'

import '../styles/style.css'
import '../styles/skin-green.css'


// configure Swiper to use modules
SwiperCore.use([Autoplay, , Scrollbar, A11y]);
const Swipermy = () => {

    // const params = {
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   grabCursor: true,
    //   autoplay: {
    //     delay: 7000,
    //     disableOnInteraction: true,
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next.swiper-button-black',
    //     prevEl: '.swiper-button-prev.swiper-button-black'
    //   }

    // }

  return(

     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change debug')}

    >  
<SwiperSlide>
            <div className={`parallax-bg swipermy-slide swiper-img-whiskey`}>
            <Link className={`swipermy-slide-link`}  to="/redemption"></Link>
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`parallax-bg col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className={`slide-header`}>Redemption<br />Whiskey </span>Site</h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       Front End: JS, CSS, HTML 
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Lead developer
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Full width video
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> CDN Azure
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Design &amp; Client Contact
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    Partnered with The BAM Connetion. Showcasing the many types of Redemption Whiskey
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide>

<SwiperSlide>
            <div className={`parallax-bg swipermy-slide swiper-img-ablecare`}>
            <Link className={`swipermy-slide-link`}  to="/ableto"></Link>
            
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`parallax-bg col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className={`slide-header`}>AbleTo</span></h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       Virtual Behavioral<br/>Health Care 
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> A reconsidered WordPress site
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Responsive Mobile first design
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> The Front End Trinity:<br/>JavaScript, CSS, HTML5
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> UX Design
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    Working with virtual behavioral therapy provider AbleTo, Inc NYC
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide>            
<SwiperSlide>
            <div className={`swipermy-slide swiper-img-edgemount`}>
             <Link className={`swipermy-slide-link`}  to="/edgemont"></Link>
             
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className={`slide-header`}>Edgemont </span><br />Capital</h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       Financial<br/>Industry
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> php, sccs and js
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> large scale site
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Development and Design
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Responsive Mobile first design
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    <i>Edgemout Capital's</i> corporate web site. Working with the DeSantis Breindel team.
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide>

<SwiperSlide>
             <div className={`swipermy-slide swiper-img-optioncare`}>
             
             <Link className={`swipermy-slide-link`}  to="/Optioncare"></Link>
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className={`slide-header`}>Option </span><br />Care</h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       Health Care<br/>Industry
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> php, sccs and js
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> large scale site
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> WordPress, Dev and Design
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Responsive Mobile first design
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    <i>OptionCare's</i> corporate web site. Working with the Greater Than One team.
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide>
<SwiperSlide>
            <div className={`swipermy-slide swiper-img-dell`}>
             <Link className={`swipermy-slide-link`}  to="/DellTech"></Link>
             
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className="slide-header">Dell<br />Technologies</span><br />web site</h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       Digital Corporation
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Bootstrap Framework
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Green Sock Animation
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Mobile First
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> html5, css, javascript
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    <i>Dell Technologies</i> main web site. Built with the NYC agency Rebelion Design.
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide> 
<SwiperSlide>           
            <div className={`swipermy-slide swiper-img-nbcu`}>
            <Link className={`swipermy-slide-link`}  to="/NBCU"></Link>
             
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className={`slide-header`}>NBC Universal</span><br />Creative Group</h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       NBC Internal Agency
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Templets Created
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Mobile First
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Green Sock, Isotope,<br />Bootstrap, ScrollMagic 
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> html5, css, javascript
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    <i>NBCU Creative Group</i> web site. Lead Developer with the NBCU Creative Group.
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide>
<SwiperSlide>
            <div className={`swipermy-slide swiper-img-wataah`}>
            <Link className={`swipermy-slide-link`}  to="/Watahh"></Link> 
             
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className={`slide-header`}>Water<br />for kids &amp;</span><br />teenagers</h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       Consumer Direct
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Bootstrap Framework
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Video Delivery
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Rich Media!
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> html5, css, javascript
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    WAT-AAH! <i>Taking Back the Streets</i> collector bottles and artwork show case. Built for WAT-AAH! New York City. I was the sole developer and producer.
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide>
<SwiperSlide>
            <div className={`swipermy-slide swiper-img-wilmette`}>
            <Link className={`swipermy-slide-link`}  to="/Wilmette"></Link> 
             
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className={`slide-header`}>Wilmette<br />Historical<br />Museum</span></h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       Illinois Museum
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Historical site location map
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Developed for large touch <br />screen & mobile
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Leaflet.js, GreenSock.js
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> html5, css, javascript, map API
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    <i>Wilmette Historical Museum</i> Lead developer and designer with the Wilmette Historical Museum.
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide>
<SwiperSlide>            

            <div className={`swipermy-slide swiper-img-clairmail`}>
            <Link className={`swipermy-slide-link`}  to="/MobileBanking"></Link> 
            
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className={`slide-header`}>Mobile Banking </span><br />Demo</h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       Front End Flash
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Sole developer AS3
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> External Classes
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Animation Sinc Audio
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Design &amp; Client Contact
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    Partnered with Monitise N.America. Customised for several banks, Bank of Montreal shown here. Demonstrates to users mobile banking functions on several telephone types.
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide>
<SwiperSlide>
              <div className={`swipermy-slide swiper-img-banners`}>
              <Link className={`swipermy-slide-link`}  to="/banners"></Link>
            
              <div className={`swipermy-container`}>
              <div className={`row`}>
                <div className={`col-md-12 fadein scaleInv anim_1 hidden-xs`}>
            
                  <div className={`fadein scaleInv anim_2`}>
                    <h2 className={`carouselTitle1 animated fadeInLBig notransition`}><span className={`slide-header`}>Banners </span><br />Display Ads</h2>
                  </div>
                  <div className={`fadein scaleInv anim_1`}>
                    <p className={`carouselRoll2 animated fadeInLeft`}>
                       Front End HTML CSS<br/>JavaScript
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> In Dev teams or sole developer
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_3`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> GreenSock and other libraries
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_4`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Google AdManager<br/> &nbsp;&nbsp;&nbsp;and DoubleClick
                    </p>
                  </div>
                  <div className={`fadein scaleInv anim_5`}>
                    <p className={`carouselText3 animated fadeInRight`}>
                      <i className={`icon-wrench`}></i> Design &amp; Client Contact
                    </p>
                  </div>
                  
                  <div className={`fadein scaleInv anim_6`}>
                    <p className={`carouselText4 animated fadeInUp`}>
                    Partnered with Ad agencies and directly with companies.
                    </p>
                  </div>
            
                  </div>
                </div>
              </div>
            </div>
</SwiperSlide>            
          </Swiper>
  )
}

export default Swipermy;

