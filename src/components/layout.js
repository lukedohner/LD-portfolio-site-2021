import React from 'react'


import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
/* eslint-disable */
import {Link} from 'gatsby'
import Header from './header'
import Footer from './footer'
// import { Link } from 'gatsby'
import '../styles/layout.css'
import '../styles/custom.css'
import '../styles/layout-boxed.css'
import '../styles/bootstrap.css'
import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/layout-boxed.css'
import '../styles/skin-green.css'


// <link rel="shortcut icon" href="img/favicon.ico">
// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title, description
            menuLinks {
              name 
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div className={"wrapbox"}>
     
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
          <div
            style={{
              margin: `140px auto 40px auto`,
              paddingTop: 0,
            }}
          > 
            
            {children}
            
          </div>
          
        <Footer/>
      </div>

    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
