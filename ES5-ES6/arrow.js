// ES5
let consoleES5 = function () {
    console.log("Hello World");
}
consoleES5();

// ES6
let consoleES6 = () => { console.log("Hello world") }
consoleES6();

/* ------------------------------------- */


// ES5 
let multiplyES5 = function (x, y) {
    return x * y;
}
console.log(multiplyES5(2, 3));


// ES6 
let multiplyES6 = (x, y) => { return x * y }
console.log(multiplyES6(5, 6));



/* ------------------------------------- */

//ES5
let splitES5 = function (text) {
    return text.split(' ');
}
console.log(splitES5("Test1 Test2 Test3"));

// ES6
let splitES6 = text => text.split(' ');
console.log(splitES5("Test1 Test2 Test3"));


/* ------------------------------------- */

//ES5
let getProducES5 = function (id, name) {
    return {
        id: id,
        name: name
    }
}
console.log(getProducES5(2, "Samsung"));
//ES6

let getProducES6 = (id, name) => (
    {
        id: id,
        name: name,
    }
)
console.log(getProducES6(8, "Nokia"));


/* ------------------------------------- */

const phones = [
    {name:"iphone 8" , price:"1000"},
    {name:"iphone 10" , price:"2000"},
    {name:"iphone 11" , price:"2500"},
    {name:"iphone8 12" , price:"3000"}
]

// ES5
let priceES5 = phones.map(function(phone){
    return phone.price;
})
console.log(priceES5);

//ES6
let priceES6 = phones.map(phone=>phone.price);
console.log(priceES6);

/* ------------------------------------- */

const arr = [1,2,3,6,12,15,18,19,23,26,29];

// ES5
let evenES5 = arr.filter(function(a){
    return a%2==0
})
console.log(evenES5);

//ES6
let evenES6 = arr.filter(a=>a%3==0);
console.log(evenES6);
