import React from "react"
import { hideEmail, formatDate } from './../../shared/utils'
import PropTypes from "prop-types"

const UserItem = ({ user }) => {

    const genderClass = (user.gender !== "male") ? "collection-item avatar red lighten-5" : "collection-item avatar";

    return (
        <li className={genderClass}>
            <img alt='' src={user.picture.medium} className="circle" />
            <span className="title">name: {user.name.first}</span>
            <p><i className="material-icons">email</i>email: {hideEmail(user.email)} <br />
            <i className="material-icons">cake</i>birthday: {formatDate(user.dob)}
            </p>
        </li>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem