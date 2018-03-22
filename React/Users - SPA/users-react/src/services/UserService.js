import User from './../entities/User'
import { URL } from "./../shared/constants"

import axios from 'axios'

class UserService {
    constructor(url) {
        this.url = url
    }

    fetchAndCreateUsers = async () => {
        const response = await axios.get(URL)
        const rawUsersData = response.data.results;
        const usersInstances = rawUsersData.map(user => new User(user));

        return usersInstances;
    }
}

const userService = new UserService(URL);

export default userService;