import React from "react"
import PropTypes from "prop-types"

const Header = ({ changeView, fetch }) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Bit Users</a>
                <ul className="right hide-on-med-and-down">
                    <li onClick={fetch}><a href="#"><i className="material-icons">refresh</i></a></li>
                    <li onClick={changeView}><a href="#"><i className="material-icons">view_module</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

Header.propTypes = {
    changeView: PropTypes.func,
    fetch: PropTypes.func,
}

export default Header