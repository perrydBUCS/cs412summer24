






const adder3 = (left, right) => left + right;

const adder3a = function (left, right) {
    return left+ right;
}

const adder4 = () => 42;

const adder4a = _ => 42;

const adderOneParam = foo => foo +42;
//LINTER

const baz = [1, 2, 'blue', 'an orange'];


//const adder7 = /. => 42;

const adder5 = (left) => { let baz = null; return left+30; }

const adder6 = left => 30 + left;

//console.log(`${adder3(30,12)}`);
console.log(adder7());
//console.log(adder5(12));


//Ways to define variables

console.log(foo1);

var foo1 = 42; //please don't use
foo2 = 42; //please don't use
//let and const bind to file OR brace (block scope)
{ let foo3 = 24; }
let foo3 = 42;
const foo4 = 42;

//JS has two scopes: file and function
//It HOISTS variables to the top of the file

