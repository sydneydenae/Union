import * as React from 'react'
import { Link } from 'gatsby'
import { container, logo, navbar, navLinks, navLinkItem, navLinkText, footer } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={navbar}>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/form" className={navLinkText}>Form</Link></li>
          <li className={navLinkItem}><Link to="/demo" className={navLinkText}>Demo</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <footer className={footer}>
      <p>&copy; Copyright TradingAlgorithm</p>
      </footer>
    </div>
  )
}

export default Layout
//This was between main
//<h1 className={heading}>{pageTitle}</h1>