import React from 'react';

import showService from './services/ShowService'

import Header from './partials/Header'
import Footer from './partials/Footer'
import Main from './partials/Main'

class App extends React.Component {
  
  state = {
    allShows: []
  }

  componentDidMount = () => {
    this.getShows();
  }

  getShows = async () =>{
    const topShows = await showService.fetchTop50Shows();
    this.setState({ allShows: topShows })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main createShowPage = {this.createShowPage} topShows = { this.state.allShows }/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
