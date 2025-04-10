let score1 = "23"
let score2 = "23a"
let score3 = null
let score4 = undefined

console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);

let NumValue1 = Number(score1)
let NumValue2 = Number(score2)
let NumValue3 = Number(score3)
let NumValue4 = Number(score4)

console.log(typeof NumValue1);
console.log(typeof NumValue2);
console.log(typeof NumValue3);
console.log(typeof NumValue4);

// "33" => 33
// "33a" => NaN
// true => 1; false => 0


console.log(NumValue1);
console.log(NumValue2);
console.log(NumValue3);
console.log(NumValue4);

let loggedIn1 = 1
let changeBool1 = Boolean(loggedIn1)
console.log(changeBool1);

let loggedIn2 = ""
let changeBool2 = Boolean(loggedIn2)
console.log(changeBool2);

let loggedIn3 = "Full String"
let changeBool3 = Boolean(loggedIn3)
console.log(changeBool3);
 

let Num = 69
let numToStr = String(Num)
console.log(typeof numToStr);

/*------------*Operations*------------*/

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2/2);
console.log(2%2);

let str1 = "Hello"
let str2 = "World"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true);
console.log(+"");

let num1,num2,num3
num1 = num2 = num3 = 60+9

let Counter = 68
Counter++
++Counter
console.log(Counter);
