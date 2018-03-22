class Season {
    constructor(startDate, endDate) {
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }

    getInfo() {
        return `${this.startDate.formatDate()} - ${this.endDate.formatDate()}`;
    }
}

export default Season