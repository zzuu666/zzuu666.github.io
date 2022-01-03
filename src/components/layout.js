import React from "react"
import { Link } from "gatsby"
import { Toggle } from "./toggle"
import { useTheme } from "../hooks/useTheme"
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ location, title, children }) => {
  const [theme, { setIsLightTheme }] = useTheme()

  const rootPath = `/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home flex items-center" to="/">
        <StaticImage alt="Site logo" className="mr-2" height={28} width={28} src="../../content/assets/logo.png" /> {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div className="flex justify-between">
        <header className="mb-5">{header}</header>
        <Toggle onChange={setIsLightTheme} checked={theme === "light"} />
      </div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
