const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.inverse.green('New note added!'))
  } else {
    console.log(chalk.inverse.red('Note title taken!'))
  }
}
const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  saveNotes(notesToKeep)
  if (notes.length > notesToKeep.length) {
    console.log(chalk.inverse.green('note removed'))
  } else {
    console.log(chalk.inverse.red('No note found'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.green.inverse('your notes'))
  return notes.forEach(note => console.log(note))
}

const readNotes = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if (note === undefined) {
    console.log(chalk.red.inverse('Note not found'))
  } else {
    console.log(chalk.green.inverse('Note found'))
    console.log(note)
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
}

// const fs = require('fs')
// const chalk = require('chalk')

// const getNotes = function () {
//   return 'Your notes...'
// }

// const addNote = function (title, body) {
//   const notes = loadNotes()
//   const duplicateNotes = notes.filter(function (note) {
//     return note.title === title
//   })

//   if (duplicateNotes.length === 0) {
//     notes.push({
//       title: title,
//       body: body
//     })
//     saveNotes(notes)
//     console.log(chalk.inverse.green('New note added!'))
//   } else {
//     console.log(chalk.inverse.red('Note title taken!'))
//   }
// }
// const removeNote = function (title) {
//   const notes = loadNotes()
//   const notesToKeep = notes.filter(function (note) {
//     return note.title !== title
//   })
//   saveNotes(notesToKeep)
//   if (notes.length > notesToKeep.length) {
//     console.log(chalk.inverse.green('note removed'))
//   } else {
//     console.log(chalk.inverse.red('No note found'))
//   }
// }

// const saveNotes = function (notes) {
//   const dataJSON = JSON.stringify(notes)
//   fs.writeFileSync('notes.json', dataJSON)
// }

// const loadNotes = function () {
//   try {
//     const dataBuffer = fs.readFileSync('notes.json')
//     const dataJSON = dataBuffer.toString()
//     return JSON.parse(dataJSON)
//   } catch (e) {
//     return []
//   }
// }

// module.exports = {
//   getNotes: getNotes,
//   addNote: addNote,
//   removeNote: removeNote
// }
