import * as React from "react"
import gatsby from '../images/gatsby-icon.png'
import graphql from '../images/graphql.svg'
import netlify from '../images/netlify.svg'

function Footer() {
  return(
    <section className="section-footer">
    <div className="footer-div">
      <nav className="footer-nav"> 
        <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `flex-end`,
          listStyle: `none`,
          padding: `32px`,
        }}
        >
          <li>
          <a
            href="https://www.gatsbyjs.org/"
            title="Built with Gatsby"
            target="_blank"
            rel="noopener noreferrer"
            className="img-gatsby"
          >
            <img src={gatsby} className="footer-gatsby-icon" alt="Gatsby" />
          </a>
          </li>
          <li>
          <a
            href="https://www.netlify.com/"
            title="Hosted by Netlify"
            target="_blank"
            rel="noopener noreferrer"
            className="img-netlify"
          >
            <img src={netlify} className="footer-netlify-icon" alt="Netlify" />
          </a>
          </li>
          <li>
          <a
            href="https://graphql.org/"
            title="GraphQL"
            target="_blank"
            rel="noopener noreferrer"
            className="img-graphql"
          >
            <img src={graphql} className="footer-graphql-icon" alt="GraphQL" />
          </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  )
}

export default Footer