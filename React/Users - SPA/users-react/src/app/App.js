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

  componentDidMount = () => {
    this.fetchUsersData();
    this.setState({ cardView: StorageService.isCardView() })

  }

  changeViewType = () => {
    const { cardView } = this.state;
    this.setState({ cardView: !cardView });
    StorageService.setCardView(!cardView);
  }

  fetchUsersData = () => {
    this.setState({ loaded: false })

    UserService.fetchAndCreateUsers()
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

  render() {
    const contentToRender = (this.state.loaded) ? 
      <UsersList users={this.state.filteredUsers} card={this.state.cardView} /> 
      : 
      <Loading />

    return (
      <React.Fragment>
        <Header
          changeView={this.changeViewType}
          fetch={this.fetchUsersData}
          card={this.state.cardView}
          filterUsers={this.filterUsers}
          loaded={this.state.loaded}
          showIcons={true}
        />
        {contentToRender}
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
