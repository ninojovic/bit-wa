class StorageServices {
    setCardView(bool) {
        localStorage.setItem("card", bool);
    }

    isCardView() {
        const cardViewString = localStorage.getItem("card");
        const cardView = JSON.parse(cardViewString);
        return cardView;
    }
}

const StorageService = new StorageServices();

export default StorageService;