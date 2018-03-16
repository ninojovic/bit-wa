import React, { Component } from 'react';
import {ListOfUsers} from "./ListOfUsers";

export const Main = ({ data }) => (
    <div className="container">
        <ListOfUsers data = {data}/>
    </div>
)
