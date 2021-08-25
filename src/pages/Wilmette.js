import React from 'react'
 // eslint-disable-next-line
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wilmette = () => (
  <Layout>
     <SEO title="Wilmette" keywords={[`gatsby`, `application`, `react`]} />

    <section className="pageheader-default text-center">
		
	<div className="semitransparentbg">
		<h1 className="animated fadeInLeftBig notransition">Wilmette Historical Museum </h1>
		<p className="animated fadeInRightBig notransition container page-description">
			 Design and Build a map site to document historic places.<br></br>
			 Partnered Wilmette Historical Museum.
		</p>
	</div>
	</section>
	<div className="wrapsemibox">
		
					<div class="container">
		  <div className="row">
		
		<div className="span8">
			<div className="wilmette-image" id="wilmette-image">	
		</div>
		
	  </div>
	 </div>
	</div>
		
	
		<section className="container">
		<div className="row">
			<div className="col-md-8 animated fadeInLeft notransition">
				<h1 className="smalltitle">
				<span><a href="http://www.wilmettehistory.org/sites/default/files/mymap/">Wilmette History Museum Historic Sites </a></span>
				</h1>
				<p>
					<span className="drop-cap round">W</span>ilmette Historical Museum, a history musuem in Wilmette, Illinois. 
					Developed with Leaflet.js and Mapbox I created a map of Wilmette Illinois with icon markers which open a overlay window containing images, videos and detail text. 
					Good for mobile too.
				</p>
				<br />
				<p>
					<b>Year Creation</b>&nbsp;: 2019 <br />
					<b>Client's Name</b>&nbsp;: Wilmette Historical Museum <br />
					<b>Web Category</b>&nbsp;: Museum Interactive map site <br />
					<b>Contribution</b>&nbsp;: Development, Design and Consultation<br />
					
				</p>
			</div>
			<div className="col-md-4 animated fadeInRight notransition">
				<h1 className="smalltitle">
				<span>Testimonial</span>
				</h1>
				<blockquote>
					<p>
						The client said
					</p>
					<p>
						"We love having a large touch screen that makes it easy for people to see historic Wilmette!"<br/><b></b>
					</p>
					
					<p>
						<small><b> D.F. -WHM </b></small>
					</p>
				</blockquote>
			</div>
		</div>
		</section>
			
	</div>
  </Layout>
)

export default Wilmette