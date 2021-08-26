import React from 'react'
 // eslint-disable-next-line
import { Link } from 'gatsby'

import Layout from '../components/layout'
import seo from '../components/SEO'

const NBCU = () => (
  <Layout>
    <seo title="NBCU" />
	<div className="wrapsemibox">

	<div class="container">
		  <div className="row">
		
		<div className="span8">
			<div className="nbcu-image" id="nbcu-image">	
		</div>
		
	  </div>
	 </div>
	</div>
		
	
		<section className="container">
		<div className="row">
			<div className="col-md-8 animated fadeInLeft notransition">
				<h1 className="smalltitle">
				<span><a href="http://www.nbcucreative.com/">NBCU Creative Group</a></span>
				</h1>
				<p>
					<span className="drop-cap round">NBCU</span>Creative Group is the in house agent for NBC, creating digital, off-air collateral, brand identity, launches, branded experiences and campaigns.
				</p>
				<br />
				<p>
					<b>Year Creation</b>&nbsp;: 2019 <br />
					<b>Client's Name</b>&nbsp;: NBCU Creative <br />
					<b>Web Category</b>&nbsp;: Corporate web site <br />
					<b>Contribution</b>&nbsp;: Front End Development, Design and Consultation<br />
					
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
						"Thanks Luke, for building the incredible site now we can use your templets to expand the content even more.!"<br/><b></b>
					</p>
					
					<p>
						<small><b> R.S. -NBCU Creative </b></small>
					</p>
				</blockquote>
			</div>
		</div>
		</section>

		
	</div>
  </Layout>
)

export default NBCU