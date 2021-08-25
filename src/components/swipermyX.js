/* eslint-disable */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import '../styles/swiper/css/swiper.css'
import '../styles/swiper/css/swipercustom.css'
import '../styles/bootstrap.css'


import '../styles/layout.css'
import '../styles/custom.css'
// import '../styles/layout-boxed.css'

import '../styles/style.css'
import '../styles/skin-green.css'

 const params = {
   loop: true,
   lazy: true,
    speed: 600,
      parallax: true,
      parallaxEl: {
        el: '.parallax-bg',
        value: '-23%'
      },

          autoplay: {
            delay: 60001,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true
          }
        }

const Swipermy = ({ siteTitle}) => (
   <Swiper  {...params}>
            <div className={`parallax-bg swipermy-slide swiper-img-whiskey`}>
            <a className={`swipermy-slide-link`} href="/redemption"></a>
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

            <div className={`parallax-bg swipermy-slide swiper-img-ablecare`}>
            <a className={`swipermy-slide-link`} href="/ableto"></a>
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

            <div className={`swipermy-slide swiper-img-edgemount`}>
             <a className={`swipermy-slide-link`} href="/edgemont"></a>
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

            <div className={`swipermy-slide swiper-img-dell`}>
             <a className={`swipermy-slide-link`} href="/page-2"></a>
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
            <div className={`swipermy-slide swiper-img-nbcu`}>
             <a className={`swipermy-slide-link`} href="/page-2"></a>
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

            <div className={`swipermy-slide swiper-img-wataah`}>
             <a className={`swipermy-slide-link`} href="/page-2"></a>
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

            <div className={`swipermy-slide swiper-img-wilmette`}>
             <a className={`swipermy-slide-link`} href="/page-2"></a>
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

            <div className={`swipermy-slide swiper-img-clairmail`}>
             <a className={`swipermy-slide-link`} href="/page-2"></a>
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
          </Swiper>
)


export default Swipermy