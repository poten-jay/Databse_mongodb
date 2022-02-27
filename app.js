const fs = require("fs");

// fs.writeFileSync('./hello.txt', "hello world!")

// const data = fs.readFileSync('./hello.txt', {encoding:"utf-8"});
// console.log(data);

let text = "";
fs.readFile('./hello.txt', { encoding : "utf-8"}, (err, data) => {
    text = data;
})
console.log(text);