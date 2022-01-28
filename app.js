const notes = require('./notes.js')
const yargs = require('yargs')
// const chalk = require('chalk')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }

  },
  handler (argv) {
    notes.addNote(argv.title, argv.body)
  }

})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  title: {
    describe: 'note title',
    demandOption: true,
    type: 'string'
  },
  handler (argv) {
    notes.removeNote(argv.title)
  }

})

// create list command
yargs.command({
  command: 'list',
  describe: 'list a new note',
  handler () {
    notes.listNotes()
  }

})

// create read command
yargs.command({
  command: 'read',
  describe: 'read a new note',
  title: {
    describe: 'note title',
    demandOption: true,
    type: 'string'
  },
  handler (argv) {
    notes.readNotes(argv.title)
  }

})

yargs.parse()
// console.log(yargs.argv)

// const command = process.argv[2]

// if (command === 'add') {
//   console.log('Adding notes')
// } else if (command === 'remove') {
//   console.log('removing notes')
// }

// const add = require('./utils.js')
// const sum = add(4, -2)

// console.log(sum)

// const validator = require('validator')

// const message = getNotes()
// console.log(message)
// // console.log(validator.isURL('google.com'))
// console.log(chalk.green('Success!!'))
// console.log(process.argv[2])
