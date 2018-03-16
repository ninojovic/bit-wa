class UserEntity {
    constructor (name, email, dob, picture) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.picture = picture;
    }

    getEmail () {
        let username = "";
        let provider = "";
        let hidden = "";
        let result = "";
        let separate = 0;
        for (let i = 0; i < this.email.length; i++) {
            if (this.email[i] !== "@") {
                if (separate) {
                    provider += this.email[i];
                } else {
                    username += this.email[i];
                }
            } else {
                separate = 1;
            }
        }
        for (let i = 0; i < (username.length / 2); i++) {
            hidden += username[i];
        }
        result = hidden + "..." + "@" + provider;
    
        return result;
    }

    getDate () {
        return new Date(this.dob).toDateString();
    }
}

export default UserEntity