import React from "react"
import { hideEmail, formatDate } from './../../shared/utils'
import PropTypes from "prop-types"

const UserItem = ({ user }) => {
    return (
        <li className="collection-item avatar">
            <img alt='' src={user.picture.medium} className="circle" />
            <span className="title">name: {user.name.first}</span>
            <p>email: {hideEmail(user.email)} <br />
                birthday: {formatDate(user.dob)}
            </p>
        </li>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem