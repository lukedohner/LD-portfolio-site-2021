import React from 'react'
 // eslint-disable-next-line
import { Link } from 'gatsby'

import Layout from '../components/layout'


const Aesthetic = () => (
  <Layout>
  
    <section className="pageheader-default text-center">
		
	<div className="redemptionbg"> 
		<h1 className="animated fadeInLeftBig notransition">Care Aesthetic </h1>
		<p className="animated fadeInRightBig notransition container page-description">
			 Built a platic sugen demo in AS3 and flash<br />
			 What changes do you want?.
		</p>
	</div>
	</section>
	<div className="wrapsemibox">
		
					<div class="container">
		  <div className="row">
		
		<div className="span8">
			<div className="aesthetic-image" id="aesthetic-image">	
		</div>
		
	  </div>
	 </div>
	</div>
		
		<section className="container">
		<div className="row">
			<div className="col-md-8 animated fadeInLeft notransition">
				<h1 className="smalltitle">
				<span><a href="http://www.lukedohner.com/bootstrap-ld/detail-aesthetic.html">Aestheticare</a></span>
				</h1>
				<p>
					<span className="drop-cap round">A</span>leading healthcare and beauty provider.
				</p>
				<br />
				<p>
					<b>Year Creation</b>&nbsp;: 2017 <br />
					<b>Client's Name</b>&nbsp;: Aestheticare <br />
					<b>Web Category</b>&nbsp;: Demo<br />
					<b>Contribution</b>&nbsp;:  Development, Design and Consultation. AS3 Flash<br />	
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
						"This tool gives our clients a real time demo of the services we provide"<br/><b></b>
					</p>
					<p>
						<small><b> Aestheticare, NYC </b></small>
					</p>
				</blockquote>
			</div>
		</div>
		</section>
		
		
	</div>
  </Layout>
)

export default Aesthetic