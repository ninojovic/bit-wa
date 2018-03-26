import React from "react"
import PropTypes from "prop-types"

import UserItem from "./UserListItem"
import UserCard from "./UserCardItem"

import { NOTFOUND } from './../../shared/constants'
import './UserList.css'

const UsersList = ({ users, cardView }) => {

    const getViewType = () => {
        return (cardView) ? 
        users.map((singleUser, i) => <UserCard key={i} user={singleUser} />)
        :
        users.map((singleUser, i) => <UserItem key={i} user={singleUser} />)
    }

    const renderContent = () => {
        return (users.length !== 0) ? getViewType() 
        : 
        <img id="userNotFound" alt="notFound" src={NOTFOUND} />
    }

    return (
        <div className="row">
            <ul className="collection col s8 offset-s2">
                { renderContent() }
            </ul>
        </div>
    )
}

UsersList.propTypes = {
    users: PropTypes.array,
    card: PropTypes.bool,
}

export default UsersList