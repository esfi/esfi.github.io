import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div
      style={{
        fontSize: `150%`,
        margin: `0 auto`,
        maxWidth: 1050,
        padding: `1.45rem 1.0875rem 1.2rem`,
      }}
    >
      <div style={{textAlign:`center`}}>

    
      
          <h1 style={{ margin: 0, color:`white`}}>
            Bella Kosmetik
          </h1>

      <div className="">
      <div className={styles.navigation}>
          <a href="http://localhost:8000/#Leistungen">Leistungen</a>
          <a href="http://localhost:8000/#Offnungszeiten">Öffnungszeiten</a>
          <a href="http://localhost:8000/#Kontakt">Kontakt</a>
          <Link to="/preisliste/"> Preise </Link>
      </div>
      </div>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
