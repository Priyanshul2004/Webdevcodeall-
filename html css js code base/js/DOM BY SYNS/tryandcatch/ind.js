 
function divide(a,b){
    try{
        if(b === 0){
            throw error("kuch glat ho gaya");
        }
        console.log(a/b);
    }
   
    catch(err){
        console.error(err)
    }
}
divide(4,0); 