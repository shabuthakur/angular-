const fs=require('fs')
const getnotes = function () {
  return "your notes"

}
const addNote=function(title,body){
  const notes=loadNotes()
  notes.push({
    title:title,
    body:body
  })
  saveNotes(notes)
}
const saveNotes=function(notes){
  const dataJson=JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJson)
}
const loadNotes=function(){
  try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJson=dataBuffer.toString()
    return JSON.parse(dataJson)


  }catch(e){
    return[]

  }
  // const dataBuffer=fs.readFileSync('notes.json')
  // const dataJson=dataBuffer.toString()
  // return JSON.parse(dataJson)

}
module.exports ={
  getnotes:getnotes,
  addNote:addNote
} 