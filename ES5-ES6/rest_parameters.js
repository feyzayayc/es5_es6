// ES5


function sumES5() {
    let arr = Array.prototype.slice.call(arguments);
    let result = 0;
    arr.forEach(function (item) {
        result += item;
    });
    return result;
}

console.log(sumES5(10, 20, 30));

//ES6

function sumES6(...arr) {
    let result = 0;
    arr.forEach(item => result += item);
    return result;
}
console.log(sumES6(10, 20, 30));


console.log("-------------Uygulama-------------")

function isDriver(...years) {
    // rest parametresi argümanların en sonunda olmalı
    years.forEach(year => console.log(2022 - year >= 18))
}
isDriver(1990,2018,2000,2005);

