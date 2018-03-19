import { URL } from "./../shared/constants"
import axios from 'axios'

class UserServices {
    fetchData() {
        return axios.get(URL)
            .then(response => response.data.results)
    }
}

const UserService = new UserServices();

export default UserService;