import React, { Component } from 'react';
import { data } from "../data";
import Header from "./Header";
import Footer from "./Footer";
import { Main } from "./Main";

class App extends Component {
  render() {
    return [
      <Header />,
      <Main data={data} />,
      <Footer />
    ]
  }
}

export default App;
