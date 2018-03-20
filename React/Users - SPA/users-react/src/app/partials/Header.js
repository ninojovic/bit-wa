import React from "react"
import PropTypes from "prop-types"

const Header = ({ changeView, fetch, card, filterUsers, updateValue, value }) => {

    const icon = (card) ? "view_module" : "view_list"

    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="row">
                        <a href="#" className="brand-logo">Bit Users</a>
                        <Search />
                        <ul className="right hide-on-med-and-down">
                            <li onClick={fetch}><a href="#"><i className="material-icons">refresh</i></a></li>
                            <li onClick={changeView}><a href="#"><i className="material-icons">{icon}</i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    changeView: PropTypes.func,
    fetch: PropTypes.func,
}

export default Header