/* eslint-disable no-undef */
const mongoose = require('mongoose')

if(process.argv.length < 3) {
  console.log('please provide a password')
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://fullstack:${password}@cluster0-yqxu2.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url,{ useNewUrlParser: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phonebook = mongoose.model('Phonebook',phonebookSchema)

const person = new Phonebook({
  name: name,
  number: number
})
if (process.argv.length === 5) {
  person.save().then(() => {
    console.log(`added ${name} ${number} to phonebook`)
    mongoose.connection.close()
  })
}

// console.log(process.argv.length)

if(process.argv.length === 3) {
  Phonebook.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(note => {
      console.log(note.name+' '+note.number)
    })
    mongoose.connection.close()
  })
}