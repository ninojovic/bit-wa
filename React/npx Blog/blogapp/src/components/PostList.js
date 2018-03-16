import React, { Component } from 'react';
import { PostItem } from "./PostItem"

export const PostList = ({ data }) => {
    const posts = data.map((post, i) => <PostItem key={i} singlePost={post} />)

    return (
        <div className="row">
            {posts}
        </div>
    )
}