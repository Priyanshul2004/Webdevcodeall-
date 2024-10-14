let parent1 = document.querySelector('.parent');
parent1.addEventListener('click', function(event){
    if(event.target.id === "play" ){
        console.log('play song ')
    }    
    else if(event.target.id ==="pause" ){
        console.log('pausae the song ')
    }


})