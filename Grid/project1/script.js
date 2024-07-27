var str = "Hello Ajay bhai Muniya "
var revstr = str.split(" ").map((word)=>{
  return word.split("").reverse().join("")
}).join(" ")

console.log(str);
console.log(revstr);
