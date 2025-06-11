// we are going to made a log apps, 
// where we command , and then write a line , it catch only the line and
// past it into the another file name : log.text

const process = require('process');
const path = require('path')
const fs = require('fs');

const message = process.argv.slice(2).join(" ");

const timeStapm = new Date().toISOString().split('T')[0];

const newMessage = `${message}  posted time: ${timeStapm} ${'\n'}`;

if(!message){
    console.log("❌ pls input a message");
    console.log("Example :  node index.js hellow world ");
}

const logTextPath = path.join(__dirname,"log.text")

fs.appendFile(logTextPath, newMessage, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});



