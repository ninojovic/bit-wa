import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Search from "./Search"
import HeaderNav from "./HeaderNav"

const Header = ({ changeView, reload, cardView, filterUsers, loaded, showNav }) => {

    const showSearch = (loaded) ? <Search filterUsers = {filterUsers}/> : <div className="col s6"></div>
    
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col s3">
                        <Link to="/" className="brand-logo">Bit Users</Link>
                    </div>
                        { showSearch }
                        { showNav && <HeaderNav reload={reload} cardView={cardView} changeView={changeView}/> }
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