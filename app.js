// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'this file is creates by nodejs ')
// const add = require('./utils.js')
// const sum = add(2, 3)
// console.log(sum)
const validator = require('validator')
//const chalk = require('chalk')
const getnotes = require('./notes.js')
const print = getnotes()
// const color = chalk.blue.inverse.bold('Hello world!')
// console.log(print)
// console.log(color);
console.log(validator.isEmail('shabuexample@gmail.com'))
console.log(validator.isURL('https://meadio'))
// console.log(process.argv[1])
const command =process.argv[2]
console.log(process.argv)
if(command==='add'){
  console.log('adding note')
}else if(command==='remove'){
  console.log('remove note')

}