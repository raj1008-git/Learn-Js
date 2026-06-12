// const user = {name: "Raj",age:21};
// user.age=22;
// user.city= "AlipurDuar";
// console.log(user);

// const numbers=[1,2,3];

// // numbers=[4,5,6];  //cannot reassign
// numbers.push(4);
// numbers[0]=100;
// console.log(numbers);

let x=10;
let y=x;
y=20;
console.log(x); // 10 unchanged.

let obj1={value: 10};
let obj2= obj1;
obj2.value=20;

console.log(obj1.value);