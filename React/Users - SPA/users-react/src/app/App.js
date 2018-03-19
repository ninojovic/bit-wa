import React from 'react';
import Header from './partials/Header'
import User from './../entities/User'
import Footer from './partials/Footer'
import UsersList from './users/UsersList'
import UserService from './../services/UserService'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [],
      card: false,
    }
  }

  changeViewType = () => {
    this.setState({ card: !this.state.card });
  }

  fetchData = () => {
    UserService.fetchData()
      .then(usersData => usersData.map(user => new User(user)))
      .then(usersInstances => {
        this.setState({ users: usersInstances })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return ([
      <Header changeView={this.changeViewType} fetch={this.fetchData} />,
      <UsersList users={this.state.users} card={this.state.card} />,
      <Footer />,
    ])
  }
}

export default App;
