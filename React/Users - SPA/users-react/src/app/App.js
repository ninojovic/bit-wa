import React from 'react';
import Header from './partials/Header'
import User from './../entities/User'
import Footer from './partials/Footer'
import UsersList from './users/UsersList'
import UserService from './../services/UserService'

class App extends React.Component {
  state = {
    users: [],
    card: false,
    value: "",
  }

  changeViewType = () => {
    this.setState({ 
      card: !this.state.card,
    });
    localStorage.setItem("card", !this.state.card);
  }

  updateValue = (event) => {
    this.setState({value: event.target.value});
  }

  fetchData = () => {
    UserService.fetchData()
      .then(usersData => usersData.map(user => new User(user)))
      .then(usersInstances => {
        this.setState({ 
          users: usersInstances,
          filterUsers: usersInstances
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  filterUsers = () => {
    const matchedUsers = this.state.users.filter(user => (user.name.first.indexOf(this.state.value) !== -1))
    this.setState({users: matchedUsers});
  }

  componentDidMount = () => {
    this.fetchData();
    this.setState({card: JSON.parse(localStorage.getItem("card"))})
  }

  render() {
    return ([
      <Header 
        changeView={this.changeViewType} 
        fetch={this.fetchData} 
        value = {this.state.value} 
        card = {this.state.card} 
        filterUsers={this.filterUsers} 
        updateValue={this.updateValue}
      />,
      <UsersList users={this.state} card={this.state.card} />,
      <Footer />,
    ])
  }
}

export default App;
