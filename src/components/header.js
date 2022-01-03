import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import clsx from "clsx"

const BasicProfile = props => {
  const { frontmatter } = props
  const { description, title, date } = frontmatter

  return (
    <>
      <h1 itemProp="headline" className="m-0 mb-4">
        {title}
      </h1>
      <p>{description}</p>
      <p className="text-xs">{date}</p>
    </>
  )
}

export const Header = props => {
  const { frontmatter } = props
  const { banner, title, date, description } = frontmatter
  const pattern = banner?.pattern ?? "side"
  const placement = banner?.placement ?? "start"

  if (banner && pattern === "side") {
    return (
      <header className="flex flex-col-reverse sm:flex-row sm:justify-between">
        <div className="sm:flex-initial">
          <BasicProfile frontmatter={frontmatter} />
        </div>
        <div className="flex justify-center mb-5 w-full sm:flex-none sm:w-4/12 sm:mb-2 sm:ml-4">
          <GatsbyImage
            className="rounded-md"
            image={banner.url?.childImageSharp?.gatsbyImageData}
            alt="Article banner"
          />
        </div>
      </header>
    )
  }

  if (banner && pattern === "top") {
    return (
      <header className="-mx-4 sm:mx-0">
        <GatsbyImage
          className="mb-4 sm:rounded-md"
          image={banner.url?.childImageSharp?.gatsbyImageData}
          alt="Article banner"
        />
        <div className="px-4 sm:px-0">
          <BasicProfile frontmatter={frontmatter} />
        </div>
      </header>
    )
  }

  if (banner && pattern === "background") {
    return (
      <header className="-mx-4 sm:mx-0">
        <div className="h-60 grid sm:h-auto">
          <GatsbyImage
            className="row-start-1 col-start-1"
            image={banner.url?.childImageSharp?.gatsbyImageData}
            alt="Article banner"
          />
          <div className="grid relative row-start-1 col-start-1 px-4 items-center">
            <div
              className={clsx("text-white", {
                "text-center": placement === "center",
                "text-right": placement === "end",
              })}
            >
              <h1 itemProp="headline" className="m-0 mb-4 text-white">
                {title}
              </h1>
              <p>{description}</p>
            </div>
            <p
              className={clsx("text-xs text-white m-0", {
                "text-center": placement === "center",
                "text-right": placement === "end",
              })}
            >
              {date}
            </p>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header>
      <BasicProfile frontmatter={frontmatter} />
    </header>
  )
}
