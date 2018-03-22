import React from 'react'

const Footer = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="index.html">BitShow</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" />
                    <div className="dropdown">
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Footer