/* eslint-disable */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import '../styles/bootstrap.css'


import '../styles/layout.css'
import '../styles/custom.css'
// import '../styles/layout-boxed.css'

import '../styles/style.css'
import '../styles/skin-green.css'

 

const Proclaim = ({ siteTitle}) => (
  <div>
    <section className="intro-note mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1> <span className="slide-header">Front End developer </span>Luke Dohner,<span className="slide-header"> HTML5, CSS, JavaScript, frameworks.</span></h1>
            <p>
               Luke is available to develope and design, (hand code or use a CMS, like WordPress) your digital projects,<br/>
               Professional &amp; dependable, great for large or small scale projects.  
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
)


export default Proclaim