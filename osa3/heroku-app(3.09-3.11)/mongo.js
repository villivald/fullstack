const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-ztsfy.mongodb.net/puhelinluettelo-app?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', noteSchema)

if (process.argv.lenght > 2) {
const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
})

person.save().then(response => {
  console.log(`${process.argv[3]} added to phonebook`)
  mongoose.connection.close()
})
} else {
  Person.find({}).then(result => {
    console.log("phonebook:");
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}