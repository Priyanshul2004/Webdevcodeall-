function SetuserName(username){
        this.username = username
}

function createUser(username,email,password){
    SetuserName.call(this,username)
    this.emai = email
    this.password = password
}

let callfun =new createUser("mai","jdnd@ded","12345")
console.log(callfun);

// fun ke andar func ko call krne ke liye .call la use krte hai 