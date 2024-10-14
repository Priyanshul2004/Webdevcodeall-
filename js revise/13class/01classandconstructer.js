class user {
    constructor(username,email,password){
            this.username = username
            this.email = email
            this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUser(){
        return `${this.username.toUpperCase()}`
    }
}


const final = new user("priyanshul","priehbe@jisuhwi","adnjcbjweb")

console.log(final.encryptPassword());
console.log(final.changeUser());