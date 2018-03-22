import React from 'react'
import { Link } from 'react-router-dom'

const ShowCard = ({ show }) => {

    const {id, image, name} = show;
    const showID = `/${id}`

    return (
        <div className="col-lg-4 col-sm-6 portfolio-item">
            <Link to={showID}>
                <div className="card h-100">
                    <img className="card-img-top" src={image.medium} alt={name} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ShowCard