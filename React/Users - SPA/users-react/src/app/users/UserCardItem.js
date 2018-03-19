import React from "react"
import { hideEmail, formatDate } from './../../shared/utils'
import PropTypes from "prop-types"

const UserCard = ({ user }) => {
    return (
        <div className="col m4">
            <div className="card">
                <div className="card-image">
                    <img alt='' src={user.picture.large} />
                </div>
                <div className="card-content">
                    <span className="title">name: {user.name.first}</span>
                    <p>email: {hideEmail(user.email)} <br />
                        birthday: {formatDate(user.dob)}
                    </p>
                </div>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserCard