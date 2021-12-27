import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Toggle } from './toggle'
import { useTheme } from '../hooks/useTheme'

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
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div className="flex justify-between">
        <header className="global-header">{header}</header>
        <Toggle onChange={setIsLightTheme} checked={theme === 'light'} />
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
