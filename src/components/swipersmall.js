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
// http://kidjp85.github.io/react-id-swiper/
    const params = {
     
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };


const Swipersmall = ({ siteTitle}) => (
    <section className="home-portfolio bgarea topspace30">
    <div className="bgarea-semitransparent">
      <div className="container">
        <h1 className="small text-center animated  notransition">FEATURED DISPLAY AD WORK</h1>
        <h4 className="animated  notransition text-center topspace20">
           Advertising for the Lincoln Center Festival.
          <br />Working with Lincoln Center, I designed, built and coded banners for several events.
        </h4>
        <br/>
        <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-4 animated  notransition">
            
            
          <Swiper  {...params}>

            <div className="swiper-img-kabuki-1"></div>
            <div className="swiper-img-kabuki-2"></div>
            <div className="swiper-img-kabuki-3"></div> 
               
          </Swiper>
              
              
            
          </div>
          <div className="col-md-5 animated  notransition">
            <ul className="icons">
              <li>
              <h4><i className="icon-magic"></i>Pixel perfect layout </h4>
              <h4>
                 Designed Photoshop comps and animated banners
              </h4>
              </li>
              <li>
              <h4><i className="icon-bolt"></i>Showcase the artists and the performance work.</h4>
              <h4>
                 Feature the photography of the performances to sell the art
              </h4>
              </li>
              <li>
              <h4><i className="icon-mobile-phone"></i>GreenSock GSAP leveraging</h4>
              <h4>
                 Brought my expertise in display advertising, GSAP and DoubleClick coding
              </h4>
              </li>
              <li>
              <h4><i className="icon-flag-checkered"></i>Compliance with publisher specs.</h4>
              <h4>
                 Used the maximum amount of photography with minimum output file size
              </h4>
              </li>
              <li>
              <h4><i className="icon-leaf"></i>Animated to bring the banners up to Lincoln Center standards</h4>
              <h4>
                Increased the drama of movement while keeping it exquisitely tasteful
              </h4>
              </li>
            </ul>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
    </section>
  
)


export default Swipersmall
