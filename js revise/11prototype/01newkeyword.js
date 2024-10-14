// agar kisi function ke para meter me same val hai or andar bhe same chize define
// krni hai to .this ka use krte hai 

function f1(username,score){
         this.username = username
         this.score = score
}

f1.prototype.increse = function(){
        this.score++
}

f1.prototype.printme = function() {
    console.log(`score is ${this.score}`);
}

const first =new f1("sahil",20)

first.printme()