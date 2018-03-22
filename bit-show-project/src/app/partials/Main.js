import React from 'react'

import ShowCard from './ShowCard'

const Main = ({ topShows }) => {
    const showArr = topShows.map((show, i) => {
    return  <ShowCard show={show} key={i} />
});

    return (
        <div className="container">
        <h1 className="my-4">Popular Shows</h1>
            <div className="row">
                {showArr}
            </div>
        </div>
    )
}

export default Main