const first = {
     user: "priyanshul",
     clg: "rits",

     funmain:function(){
       console.log(`${this.user} , prin in console`)
    }
}

first.funmain()
first.user="priyanshul2"
first.funmain()