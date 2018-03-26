import React from 'react'
import { Link } from "react-router-dom"

const HeaderNav = ({ reload, changeView, cardView }) => {

    const icon = (cardView) ? "view_module" : "view_list"

    return (
        <div className="col s3">
            <ul className="right hide-on-med-and-down">
                <li><Link to="/about">About</Link></li>
                <li onClick={ reload }><a><i className="material-icons">refresh</i></a></li>
                <li onClick={ changeView }><a><i className="material-icons">{ icon }</i></a></li>
            </ul>
        </div>
    )
}

export default HeaderNav