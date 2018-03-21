import React from 'react';

import userService from './../services/UserService'
import storageService from './../services/StorageService'

import { searchUsersByName } from './../shared/utils'

import Header from './partials/Header'
import Footer from './partials/Footer'
import UsersList from './users/UsersList'
import Loading from './partials/Loading'

class App extends React.Component {
  state = {
    users: [],
    filteredUsers: [],
    cardView: false,
    loaded: false,
  }

  componentDidMount = () => {
    this.fetchUsersData();
    this.setState({ cardView: storageService.isCardView() })
  }

  changeViewType = () => {
    const { cardView } = this.state;

    this.setState({ cardView: !cardView });
    storageService.setCardView(!cardView);
  }

  fetchUsersData = async () => {
    this.setState({ loaded: false })

    const userInstances = await userService.fetchAndCreateUsers()
    this.setState({ users: userInstances, filteredUsers: userInstances, loaded: true })
  }

  filterUsers = (valueToSearch) => {
    const { users } = this.state
    const matchedUsers = searchUsersByName(users, valueToSearch);

    this.setState({ filteredUsers: matchedUsers });
  }

  render() {
    const contentToRender = (this.state.loaded) ?
      <UsersList users={this.state.filteredUsers} cardView={this.state.cardView} />
      :
      <Loading />

    return (
      <React.Fragment>
        <Header
          changeView={this.changeViewType}
          reload={this.fetchUsersData}
          cardView={this.state.cardView}
          filterUsers={this.filterUsers}
          loaded={this.state.loaded}
          showNav={true}
        />
        {contentToRender}
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;