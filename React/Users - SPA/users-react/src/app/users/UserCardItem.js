import React from "react"
import { hideEmail, formatDate } from './../../shared/utils'
import PropTypes from "prop-types"

const UserCard = ({ user }) => {

    const genderClass = (user.isFemale()) ? "red lighten-5" : "";

    return (
        <div className="col s4">
            <div className= {`card ${genderClass}`}>
                <div className="card-image">
                    <img alt='' src={user.picture.large} />
                </div>
                <div className="card-content">
                    <span className="title">name: {user.getFullName()}</span>
                    <p><i className="material-icons">email</i>email: {hideEmail(user.email)} <br />
                    <i className="material-icons">cake</i>birthday: {formatDate(user.dob)}
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