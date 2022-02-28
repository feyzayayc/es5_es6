function getTotal (a,b,c){
    return a+b+c;
}

console.log(getTotal(10,20,30));
let numbers=[10,20,30];

//ES5
console.log(getTotal.apply(null,numbers));

//ES6

console.log(getTotal(...numbers));


console.log("------------------------------------");

let arr1 = ['two','three'];
let arr2 = ['one','four','five'];


// arr1.push(...arr2);
// console.log(arr1);
// arr1.push(arr2);
// console.log(arr1);

let arr3 = ['one',...arr1,"üç",'dört'];
console.log(arr3);

///https://muratdogan.medium.com/sen-javascriptin-bir-l%C3%BCtfusun-spread-operat%C3%B6r-extended-version-fa5de70beaeb