import { URL } from "./../shared/constants"
import User from './../entities/User'
import axios from 'axios'

class UserService {
    constructor(url) {
        this.url = url
    }

    fetchAndCreateUsers() {
        return axios.get(URL)
            .then(response => response.data.results)
            .then(usersData => usersData.map(user => new User(user)))
    }
}

const userService = new UserService(URL);

export default userService;