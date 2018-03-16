import React, { Component } from 'react';
import { Header } from './Header';
import { Main } from './Main';

const App = ({ data }) => (
  <div>
    <Header />
    <Main data={data} />
  </div>
)

export default App;
