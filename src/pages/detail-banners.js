import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/layout-boxed.css'
const DetailBanners = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to banners page</p>
    <Link to="/">Goanners back to the homepage</Link>
  </Layout>
)

export default DetailBanners