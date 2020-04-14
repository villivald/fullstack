const express = require('express')
const app = express()

let persons = [
    {
        id: 1, 
        name: 'Arto Hellas', 
        number: '040-123456' 
    },
    {
        id: 2, 
        name: 'Ada Lovelace', 
        number: '39-44-5323523' 
    },
    {
        id: 3, 
        name: 'Dan Abramov', 
        number: '12-43-234345' }
        ,
    {
        id: 4, 
        name: 'Mary Poppendieck', 
        number: '39-23-6423122' 
    }
  ]


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

app.get('/api/persons', (req, res) => {
    const person = persons
    res.json(person)
  })

app.get('/info', (req, res) => {
    const info = `Phonebook has info for ${persons.length} people`
    let today = new Date()
    res.send(info + "<br><br>" + today)
  })
  
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    response.json(person)
    
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
  })

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })