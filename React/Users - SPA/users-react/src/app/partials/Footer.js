import React from "react"

import { timeFromLastVisit } from './../../shared/utils'

const Footer = ({ lastVisit }) => {

  const lastUpdate = timeFromLastVisit(lastVisit)

    return (
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text <span className="right">Last update: {lastUpdate}</span>
            </div>
          </div>
        </footer>
    )
}

export default Footer