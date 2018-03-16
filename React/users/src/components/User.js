import React, { Component } from 'react';

export const User = ({ user }) => {

    return (
        <li className="collection-item avatar">
            <img src={user.picture.medium} alt="" className="circle" />
            <span className="title">name: {user.name.first}</span>
            <p>email: {user.getEmail()}<br />
                date of birth: {user.getDate()}
            </p>
        </li>
    )
}