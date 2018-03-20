import React from 'react';
import Header from './partials/Header'
import User from './../entities/User'
import Footer from './partials/Footer'
import UsersList from './users/UsersList'
import UserService from './../services/UserService'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],  //INSTEAD OF LINE 28 NEEDS TO BE SOMETHING LIKE FILTEREDUSERS = USERS;
      card: false,
    }
  }

  changeViewType = () => {
    this.setState({ card: !this.state.card });

    UserService.setCardView(!this.state.card);
  }

  fetchData = () => {
    UserService.fetchData()
      .then(usersData => usersData.map(user => new User(user)))
      .then(usersInstances => {
        this.setState({ users: usersInstances, filteredUsers: usersInstances })
      })
  }

  filterUsers = (valueToSearch) => {
    const allUsers = this.state.users;
    const matchedUsers = allUsers.filter(user => (user.name.first.indexOf(valueToSearch) !== -1));
    
    this.setState({ filteredUsers: matchedUsers });
  }

  componentDidMount = () => {
    this.fetchData();
    this.setState({ card: UserService.isCardView() })
  }

  render() {
    return ([
      <Header
        changeView={this.changeViewType}
        fetch={this.fetchData}
        card={this.state.card}
        users={this.state.users}
        filterUsers={this.filterUsers}
      />,
      <UsersList users={this.state.filteredUsers} card={this.state.card} />,
      <Footer />,
    ])
  }
}

export default App;
