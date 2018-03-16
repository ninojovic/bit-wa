import React, { Component } from 'react';

export const PostItem = ({ singlePost }) => (
    <div className="col s12">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{singlePost.title}</span>
                <p>{singlePost.body}</p>
            </div>
        </div>
    </div>
)