import PropTypes from 'prop-types'
import React from 'react'

const Emailer = ({ siteTitle, siteDescription }) => (
<div>
  <section>
      <div> 
        <form action="https://formspree.io/lukedohner@gmail.com" method="POST">
          <input className="col-md-12" type="email" name="email" placeholder="Your email"></input>
          <textarea className="col-md-12" name="message" placeholder="Your Message"></textarea>
          <input className="col-md-12" type="submit" value="Send it!"></input>
          <input type="hidden" name="_subject" value="New submission from LocalHost:8000! You may know it as LD.com" />
        </form>
      </div>
  </section>
</div>
)

Emailer.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Emailer.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Emailer