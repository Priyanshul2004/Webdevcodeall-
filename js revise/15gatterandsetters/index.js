class User {
    constructor(username, password, email) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase(); 
    }

    set password(value) {
        this._password = value;
    }
}

const funcal = new User("priyanshul", "abcd", "qhwe@gwdu");

console.log(funcal.password); 
