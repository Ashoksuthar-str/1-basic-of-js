let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate1 = new Date(2004,7,8)
let myCreatedDate2 = new Date(2004,7,8,5,2)
let myCreatedDate3 = new Date("2004-8-8")

// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());

let time = new Date()


console.log(time);
console.log(time.getMonth()+1);
console.log(time.getDay());

console.log(time.toLocaleString('default',{
    weekday:"long",
}));
