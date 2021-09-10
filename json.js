const fs = require('fs')
const { userInfo } = require('os')
// const book={
//   title:'ego is enemy',
//   author:'shabu'
// }
// const  bookJASON=JSON.stringify(book)
// // console.log(bookJASON)
//  fs.writeFileSync('sjson.json',bookJASON)
//  const dataBuffer=fs.readFileSync('sjson.json')
//  const data=dataBuffer.toString()
//  const parse=JSON.parse(data) 
//  console.log(parse.title)

 //challange withjson
 const dataBuffer=fs.readFileSync('sjson.json')
 const data=dataBuffer.toString()
 const user=JSON.parse(data) 
  user.name='shabu'
  user.age=21
  const  suser=JSON.stringify(user)
  fs.writeFileSync('sjson.json',suser)
 