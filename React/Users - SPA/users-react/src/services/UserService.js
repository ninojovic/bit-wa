import { URL } from "./../shared/constants"
import User from './../entities/User'
import axios from 'axios'

class UserServices {
    fetchAndCreateUsers() {
        return axios.get(URL)
            .then(response => response.data.results)
            .then(usersData => usersData.map(user => new User(user)))
    }

    fetchWithDelay() {
        return new Promise((resolve) => {
            setTimeout(() => {
                axios.get(URL)
                .then(response => response.data.results)
                .then(usersData => usersData.map(user => new User(user)))
                .then(users => resolve(users))
            }, 5000)
        })
    }
}

const UserService = new UserServices();

export default UserService;