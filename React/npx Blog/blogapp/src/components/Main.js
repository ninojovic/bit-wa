import React, { Component } from 'react';
import { PostList } from "./PostList"

export const Main = ({ data }) => (
    <div className="container">
        <PostList data={data} />
    </div>
)