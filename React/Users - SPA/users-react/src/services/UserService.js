import { URL } from "./../shared/constants"
import axios from 'axios'

class UserServices {
    fetchData() {
        return axios.get(URL)
            .then(response => response.data.results)
    }

    setCardView(bool) {
        localStorage.setItem("card", bool);
    }

    isCardView() {
        const cardViewString = localStorage.getItem("card");
        const cardView = JSON.parse(cardViewString);
        return cardView;
    }
}

const UserService = new UserServices();

export default UserService;