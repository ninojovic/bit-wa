import { KEY } from "constants"


class StorageService {
    constructor(key) {
        this.key = key
    }

    setCardView(bool) {
        localStorage.setItem(this.key, bool);
    }

    isCardView() {
        const cardViewString = localStorage.getItem(this.key);
        const cardView = JSON.parse(cardViewString);
        return cardView;
    }
}

const storageService = new StorageService(KEY);

export default storageService;