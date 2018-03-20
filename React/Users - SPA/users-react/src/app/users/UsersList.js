import React from "react"
import UserItem from "./UserListItem"
import UserCard from "./UserCardItem"
import PropTypes from "prop-types"
import './UserList.css'

const UsersList = ({ users, card }) => {
    const cardView = users.map((singleUser, i) => <UserCard key={i} user={singleUser} />)
    const listView = users.map((singleUser, i) => <UserItem key={i} user={singleUser} />)

    const viewType = (card) ? cardView : listView

    return (
        <div className="row">
            <ul className="collection col s8 offset-s2">
                { viewType }
            </ul>
        </div>
    )
}

UsersList.propTypes = {
    users: PropTypes.array,
    card: PropTypes.bool,
}

export default UsersList