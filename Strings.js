const name = "Ashok"
const repoCount = 50

// console.log(name + repoCount + " VAlue");

console.log(`Hello i am ${name} and repo count is ${repoCount}`);

const Name = new String("Hello World!!")

// console.log(Name[0]);
// console.log(Name.__proto__);

// console.log(Name.length);
// console.log(Name.toUpperCase());
// console.log(Name.charAt(3));
// console.log(Name.indexOf("o"));

const trimString = Name.substring(3,8)
console.log(trimString);


const sliceString = Name.slice(-11,7)
console.log(sliceString);

const spaceString = "   hii            "
console.log(spaceString.trim());


const replaceString = "http://myWeb"
console.log(replaceString.replace("my","your"));

console.log(replaceString.includes("Web"));

const splitString = "a-b-c-f"
console.log(splitString.split("-"));



