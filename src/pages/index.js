import * as React from "react"
import loadable from '@loadable/component'
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import {Helmet} from 'react-helmet'
import Layout from "../components/layout"
import seo from "../components/seo"
import Swipermy from '../components/swipermy'
import Proclaim from '../components/proclaim'
import Swipersmall from '../components/swipersmall'
import Whatisay from '../components/whatisay'
// import MuuriMaker from '../components/muurimaker'
// import {MuuriMaker2} from '../components/muurimaker2';
import Servicebox from '../components/servicebox'

import '../styles/layout-boxed.css'
const LoadableMuuriMaker = loadable(() => import('../components/muurimaker'))


const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Luke Home Page</title>
      <meta name="description" content="Home Page" />
    </Helmet>
    <seo title="Home-p" keywords={[`gatsby`, `application`, `react`]} />

   <div style={{ marginTop: `88px` }}>
    <Swipermy />
    <Proclaim />
    <Servicebox />
    <Swipersmall />
    <Whatisay />
    <LoadableMuuriMaker  />
  {/*<MuuriMaker />*/}
    {/*<MuuriMaker2 />*/}

    </div>

  
  </Layout>
)

export default IndexPage
