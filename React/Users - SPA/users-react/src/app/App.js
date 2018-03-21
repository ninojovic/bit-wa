import React from 'react';
import Header from './partials/Header'
import Footer from './partials/Footer'
import UsersList from './users/UsersList'
import UserService from './../services/UserService'
import StorageService from './../services/StorageService'
import Loading from './partials/Loading'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      cardView: false,
      loaded: false,
    }
  }

  changeViewType = () => {
    this.setState({ cardView: !this.state.cardView });
    StorageService.setCardView(!this.state.cardView);
  }

  fetchUsersData = () => {
    this.setState({loaded:false})
    
    UserService.fetchWithDelay()
    //UserService.fetchAndCreateUsers()
      .then(usersInstances => {
        this.setState({ 
          users: usersInstances, 
          filteredUsers: usersInstances, 
          loaded: true,
        })
      })
  }

  filterUsers = (valueToSearch) => {
    const allUsers = this.state.users;
    const matchedUsers = allUsers.filter(user => (user.getFullName().indexOf(valueToSearch) !== -1));
    
    this.setState({ filteredUsers: matchedUsers });
  }

  componentDidMount = () => {
    this.fetchUsersData();
    this.setState({ cardView: StorageService.isCardView() })
  }

  render() {

    return (
      <React.Fragment>
        <Header
          changeView={this.changeViewType}
          fetch={this.fetchUsersData}
          card={this.state.cardView}
          users={this.state.users}
          filterUsers={this.filterUsers}
          loaded={this.state.loaded}
        />
        {
          (this.state.loaded) ? 
          <UsersList users={this.state.filteredUsers} card={this.state.cardView} /> 
          : 
          <Loading />
        }
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
