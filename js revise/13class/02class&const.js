class user{
    constructor(username){
        this.username = username
    }
}

class Teacher extends user {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`new course is added by ${this.username}`);
    }
}

const use1 =new Teacher("priyanshul","kcoen@jowj","m2knd")

use1.addcourse()
/// if we will provide statice that is not accessable for everywhere
// after read about bind