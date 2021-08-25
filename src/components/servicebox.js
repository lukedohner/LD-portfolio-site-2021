/* eslint-disable */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react';
import '../styles/bootstrap.css'


import '../styles/layout.css'
import '../styles/custom.css'
// import '../styles/layout-boxed.css'

import '../styles/style.css'
import '../styles/skin-green.css'

 

const Servicebox = ({ siteTitle}) => (
  <div>
    <section className="service-box topspace30">
    <div className="container">
      <div className="row">
        <div className="col-md-3 text-center animated notransition">
          <div className="icon-box-top active">
            <i className="fontawesome-icon medium circle-white center icon-rocket"></i>
            <h1>Powerful &amp; Clean</h1>
            <p>
               Mr. Dohner has the chops to give your project the goods it needs to get across the finish. 
            </p>
            <p className="fontupper">
              <a href="#" className="readmore">Finish Line <i className="icon-double-angle-right"></i></a>
            </p>
          </div>
        </div>
        <div className="col-md-3 text-center animated notransition">
          <div className="icon-box-top">
            <i className="fontawesome-icon medium circle-white center icon-cogs"></i>
            <h1>Fresh &amp; Modern</h1>
            <p>
               I use modern tools and libraries like node.js, react.js, gatsby.js, greensock.js, leaflet.js, d3.js, scss, jQuery and bootstrap.
            </p>
            <p className="fontupper">
              <a href="#" className="readmore">You're Fresh <i className="icon-double-angle-right"></i></a>
            </p>
          </div>
        </div>
        <div className="col-md-3 text-center animated notransition">
          <div className="icon-box-top">
            <i className="fontawesome-icon medium circle-white center icon-microphone"></i>
            <h1>Best Practices</h1>
            <p>
               I am vigilant, I write clean code that is well commented and readable to experienced mortals.
            </p>
            <p className="fontupper">
              <a href="#" className="readmore">Experience some <i className="icon-double-angle-right"></i></a>
            </p>
          </div>
        </div>
        <div className="col-md-3 text-center animated notransition">
          <div className="icon-box-top">
            <i className="fontawesome-icon medium circle-white center icon-level-up"></i>
            <h1>Working smart</h1>
            <p>
               What needs to be done? Let's find the best way. I bring more than ten years experience to evaluate your project.
            </p>
            <p className="fontupper">
              <a href="#" className="readmore">the smart way <i className="icon-double-angle-right"></i></a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
)


export default Servicebox