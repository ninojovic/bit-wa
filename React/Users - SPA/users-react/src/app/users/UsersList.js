import React from "react"
import UserItem from "./UserListItem"
import UserCard from "./UserCardItem"
import PropTypes from "prop-types"

const UsersList = ({ users, card }) => {
    return (
        <div className="row">
            <ul className="collection col s8 offset-s2">
                {
                    (card) ?
                        users.map((singleUser, i) => <UserCard key={i} user={singleUser} />)
                        :
                        users.map((singleUser, i) => <UserItem key={i} user={singleUser} />)
                }
            </ul>
        </div>
    )
}

UsersList.propTypes = {
    users: PropTypes.array,
    card: PropTypes.bool,
}

export default UsersList