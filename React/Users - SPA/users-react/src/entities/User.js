import { firstLetterToUpper } from './../shared/utils'

class User {
    constructor({name, email, dob, picture, gender}) {
        this.gender = gender;
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.picture = picture;
    }

    getFullName = () => {
        const firstName = firstLetterToUpper(this.name.first)
        const lastName = firstLetterToUpper(this.name.last)

        return `${firstName} ${lastName}`
    }

    isFemale = () => {
        return (this.gender === "female") ? true : false;
    }
}

export default User