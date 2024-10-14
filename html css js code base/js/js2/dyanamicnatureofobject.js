function rectangle(){
    this.length = 2;
    this .breath =6;
    this.draw = function(){
        console.log('drawing')
    }
}
let rectangleObject = new rectangle();

rectangleObject.color = 'green';

console.log(rectangleObject)

delete rectangleObject.color;
console.log(rectangleObject)