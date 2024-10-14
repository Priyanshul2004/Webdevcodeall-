var state = [2,3,5,67,5];

var anothe = [...state];

anothe.pop();

state = anothe;
console.log(state);