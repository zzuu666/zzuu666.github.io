/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <StaticImage
        src="../../content/assets/profile-pic.jpg"
        height={50}
        width={50}
        alt={author?.name || ``}
        className="bio-avatar"
      />
      {author?.name && (
        <div>
          <p>
            <strong>{author.name}</strong>
          </p>
          <p>{author.summary}</p>
        </div>
      )}
    </div>
  )
}

export default Bio
