import React from "react"
import { hideEmail, formatDate } from './../../shared/utils'
import PropTypes from "prop-types"

const UserCard = ({ user }) => {

    const genderClass = (user.gender !== "male") ? "card red lighten-5" : "card";

    return (
        <div className="col m4">
            <div className= {genderClass}>
                <div className="card-image">
                    <img alt='' src={user.picture.large} />
                </div>
                <div className="card-content">
                    <span className="title">name: {user.name.first}</span>
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