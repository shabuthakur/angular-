const { demandOption, argv } = require('yargs')
const yargs = require('yargs')
const notes = require('../notes')
 //custmize yargs version
// yargs.version('1.1.0')

//create add command

// yargs.command({
//   command:'add',
//   describe:'add new note',
//   handler:function(){
//     console.log("adding a new note")

//   }
// })
//create remove command
yargs.command({
  command:'remove',
  describe:'remove note',
  builder:{
    title:{
      describe:"note title",
      demandOption: true,
      type:'string'
    },
    body:{
      describe:"note body",
      demandOption: true,
      type:'string'

    }
  },
  handler:function(argv){
    notes.addNote(argv.title,argv.body)

  } 

})
//add,revove,read,list


console.log(yargs.argv)