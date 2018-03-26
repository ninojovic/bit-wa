import React from "react"

import { getLastUpdateString, minsFromLastVisit } from './../../shared/utils'

const Footer = () => {

  const minsFromUpdate = minsFromLastVisit();
  const lastUpdate = getLastUpdateString(minsFromUpdate)

    return (
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © 2018 Ninoslav Jovic <span className="right">Last update: {lastUpdate}</span>
            </div>
          </div>
        </footer>
    )
}

export default Footer