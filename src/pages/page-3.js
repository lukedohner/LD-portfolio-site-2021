import React from "react"
import { Link } from "gatsby"


//import plant3 from '../images/plant3.png';

import Layout from "../components/layout"
import seo from "../components/seo"
import Hideorshow from '../components/hideorshow'
import Appgetdata from '../components/appgetdata'
import ColoredLine from '../components/coloredline'

const ThirdPage = () => (
  <Layout>
   <div className="padding50" >
    <seo title="Proof of Concepts" />
    <h1>Proof of Concepts</h1>
    <p>Welcome to Proof of Concepts page</p>
    <Hideorshow />
    <ColoredLine color="#20f012" height="1px" width="70%"/>

    <div style={{ width: "70%", marginBottom: "1.45rem", backgroundColor: "honeydew", padding:"16px"}}>    
    <Appgetdata />
    </div>
    
    {/*<div style={{ height:"300px",backgroundColor:"#e7c9c9"}}>
    <ParallaxImage />
	</div>*/}
	
	<Link to="/">Go back to the homepage</Link>
   </div> 
  </Layout>
)

export default ThirdPage