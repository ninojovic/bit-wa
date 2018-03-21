import React from "react"
import PropTypes from "prop-types"
import Search from "./Search"

const Header = ({ changeView, fetch, card, filterUsers, loaded }) => {

    const icon = (card) ? "view_module" : "view_list"

    let showSearch = (loaded) ? <Search filterUsers = {filterUsers}/> : <div className="col s6"></div>
    
    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col s3">
                            <a href="#" className="brand-logo">Bit Users</a>
                        </div>
                            {showSearch}
                        <div className="col s3">
                            <ul className="right hide-on-med-and-down">
                                <li onClick={fetch}><a href="#"><i className="material-icons">refresh</i></a></li>
                                <li onClick={changeView}><a href="#"><i className="material-icons">{icon}</i></a></li>
                            </ul>
                        </div>
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