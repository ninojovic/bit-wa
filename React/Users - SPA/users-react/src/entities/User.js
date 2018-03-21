class User {
    constructor({name, email, dob, picture, gender}) {
        this.gender = gender;
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.picture = picture;
    }

    getFullName = () => {
        return `${this.name.first} ${this.name.last}`
    }
}

export default User