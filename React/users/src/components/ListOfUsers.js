import React, { Component } from 'react';
import {User} from "./User";
import UserEntity from "../entities/UserEntity"

export const ListOfUsers = ({ data }) => {
    const userEntitiesList = data.map(user => (new UserEntity(user.name, user.email, user.dob, user.picture)));
    const usersList = userEntitiesList.map((user, i) => <User key={i} user = {user} />)

    return (
        <div className = "row">
            <ul className="collection">
                {usersList}
            </ul>
        </div>
    )
}