function fun1(url,callback){
    fetch(url)
    .then(raw=>raw.json())
    .then((result)=>{
        callback(result)
    })
}

fun1("",function name(result) {
    console.log(result.data);
})