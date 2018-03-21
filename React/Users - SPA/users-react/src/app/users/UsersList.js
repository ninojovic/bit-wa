import React from "react"
import PropTypes from "prop-types"

import UserItem from "./UserListItem"
import UserCard from "./UserCardItem"

import './UserList.css'

const UsersList = ({ users, cardView }) => {

    const getViewType = () => {
        return (cardView) ? 
        users.map((singleUser, i) => <UserCard key={i} user={singleUser} />)
        :
        users.map((singleUser, i) => <UserItem key={i} user={singleUser} />)
    }

    return (
        <div className="row">
            <ul className="collection col s8 offset-s2">
                { getViewType() }
            </ul>
        </div>
    )
}

UsersList.propTypes = {
    users: PropTypes.array,
    card: PropTypes.bool,
}

export default UsersList