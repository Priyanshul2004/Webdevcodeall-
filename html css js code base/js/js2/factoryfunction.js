let rectangle = {
    length:3,
    breath:5,

    draw:function(){
        console.log('draw');
    }
};

function createrectangle(len,bre){

    return rectangle = {
        length : len,
        breath : bre,
    
        draw:function(){
            console.log('draw');
        }

    };
}

let a=createrectangle(8,9);
