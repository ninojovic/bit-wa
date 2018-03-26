import { CARDKEY, USERSKEY, LASTVISIT } from "./../shared/constants"


class StorageService {
    constructor(cardKey, usersKey, lastVisit) {
        this.cardKey = cardKey;
        this.usersKey = usersKey;
        this.lastVisit = lastVisit;
    }

    setCardView(bool) {
        localStorage.setItem(this.cardKey, bool);
    }

    isCardView() {
        const cardViewString = localStorage.getItem(this.cardKey);
        const cardView = JSON.parse(cardViewString);

        return cardView;
    }

    setUsers(users) {
        const usersJSON = JSON.stringify(users);
        localStorage.setItem(this.usersKey, usersJSON);
    }

    getUsers() {
        const usersString = localStorage.getItem(this.usersKey);
        const users = JSON.parse(usersString);

        return users
    }

    setLastVisit() {
        localStorage.setItem(this.lastVisit, Date.now())
    }

    getLastVisit() {
        const lastVisit = localStorage.getItem(this.lastVisit);
        return parseInt(lastVisit);
    }
}

const storageService = new StorageService(CARDKEY, USERSKEY, LASTVISIT);

export default storageService;