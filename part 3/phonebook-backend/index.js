const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(morgan('combined'))

let persons =  [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      },
      {
        "name": "akhil",
        "number": "7401284502",
        "id": 5
      }
]

app.get("/",(req,res) => {
    res.send("<h1>Persons Data</h1>")
})

app.get("/api/persons",(req,res) => {
    res.json(persons)
})

app.get("/api/persons/:id",(req,res) => {
    const id = Number(req.params.id)
    const reqPerson = persons.find(person => person.id !== id )
    if(reqPerson) {
        res.json(reqPerson)
    } else {
        res.status(404).end()
    }
})

app.get("/info",(req,res) => {
    const d = new Date()
    const total = persons.length
    res.send(`Phonebook has info for ${total} people \n \n${d}`)
})

app.delete("/api/persons/:id",(req,res) => {
  const id = Number(req.params.id)
  console.log(id)
  persons = persons.filter(item => item.id !== id)
  res.status(204).end()
})

app.post("/api/persons",(req,res) => {
  app.use(morgan('combined'))
  id = Math.floor(Math.random() * 100000 + 1)
  //console.log(id)

  person = req.body
  name = req.body.name
  exists = persons.filter(item => item.name === name)

  if(person.number) {
    person.id = id 
    persons = persons.concat(person)
    res.json(person)
  } else {
    res.json({"error":"Number is missing"})
  }
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`App is now live and running at ${PORT}`)
    console.log('using morgan middle ware')
})
