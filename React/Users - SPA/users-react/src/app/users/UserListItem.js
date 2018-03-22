import React from "react"
import { hideEmail, formatDate } from './../../shared/utils'
import PropTypes from "prop-types"

const UserItem = ({ user }) => {

    const genderClass = (user.isFemale()) ? "red lighten-5" : "";

    return (
        <li className={`collection-item avatar ${genderClass}`}>
            <img alt='' src={user.picture.medium} className="circle" />
            <span className="title">name: {user.getFullName()}</span>
            <p>
                <i className="material-icons">email</i>email: {hideEmail(user.email)} <br />
                <i className="material-icons">cake</i>birthday: {formatDate(user.dob)}
            </p>
        </li>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem