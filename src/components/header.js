import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import '../styles/header.css'
import logo from "../images/logo-main.png" // Tell Webpack this JS file uses this image

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )
console.log(logo) // /logo.84287d09.png

const Header = ({ siteTitle, menuLinks, siteDescription }) => (
  // {TOP AREA================================================== }
  <div>
  <nav className="navbar navbar-fixed-top wowmenu" role="navigation">
  <div className="container">
  <Link
          to="/"
          style={{
            color: `#414342`,
            fontSize: `1rem`,
            textDecoration: `none`,
            cursor:`pointer`,
            display:`none`
          }}
        >
          {siteTitle}
          {siteDescription}
          
        </Link>
    <div className="navbar-header">
      <a className="navbar-brand logo-nav" href="/" alt="logo Luke Doohner">
        <div className="logo-main"></div>
      </a>
    </div>
 
    <ul id="nav" className="nav navbar-nav pull-rt-or-lt" style={{ display: 'flex', flex: 1, listStyle: 'none' }}>
      
      {menuLinks.map(link =>
      <li key={link.link}>
        <Link to={link.link}>{link.name}</Link>
      </li>
    )}
    </ul>  

  </div> 

  </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
