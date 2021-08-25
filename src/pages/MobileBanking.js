import React from 'react'
 // eslint-disable-next-line
import { Link } from 'gatsby'

import Layout from '../components/layout'


const MobileBanking = () => (
  <Layout>
    

    <section className="pageheader-default text-center">
		
	<div className="semitransparentbg">
		<h1 className="animated fadeInLeftBig notransition">ClairMail Mobile Banking App </h1>
		<p className="animated fadeInRightBig notransition container page-description">
			 An on-line demo banking app<br></br>
			 Partnered with ClairMail, Inc.
		</p>
	</div>
	</section>
	<div className="wrapsemibox">
		
					<div class="container">
		  <div className="row">
		
		<div className="span8">

		<div className="flex-video widescreen">
		
		<iframe title="Mobile Banking" width="640" height="390"  allowfullscreen="" src="http://www.youtube.com/embed/P_s1JGAjd4Q?feature=player_detailpage" frameborder="0"></iframe>
		</div>		
		</div>
		
	  </div>
	 </div>
	</div>
		
	
		<section className="container">
		<div className="row">
			<div className="col-md-8 animated fadeInLeft notransition">
				<h1 className="smalltitle">
				<span><a href="http://www.lukedohner.com/clients/bmo2/mobileBankingDemoBMO_v4.html/">Mobile Banking, See the flash version, you need flash. </a></span>
				</h1>
				<p>
					<span className="drop-cap round">M</span>obile banking demo. Bank of Montreal version shown here. Customized for several banks, partnered with Monitise of North America.

Demonstrates to the end consumer mobile banking functions on several phone platforms, includes audio voice over. Was also used as a sales tool to show how the banking app would work, more direct than showing on a phone.

Show mobile banking application in use with voice over audio. Branded and custom functionality for serveral North American Banks.
				</p>
				<br />
				<p>
					<b>Year Creation</b>&nbsp;: 2018 <br />
					<b>Client's Name</b>&nbsp;: ClairMail, Inc <br />
					<b>Web Category</b>&nbsp;: Demo Site <br />
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
						"Now our consumers and our financial institutes can see the app in action!"<br/><b></b>
					</p>
					
					<p>
						<small><b> P.E. -ClairMail </b></small>
					</p>
				</blockquote>
			</div>
		</div>
		</section>
		
	
  </Layout>
)

export default MobileBanking