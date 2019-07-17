require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Phonebook = require('./models/phone')

const app = express()

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())
app.use(express.static('build'))

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
    Phonebook.find({}).then(persons => {
      res.json(persons)
    })
})

app.get("/api/persons/:id",(req,res) => {
    Phonebook.findById(req,params.id).then(contact => {
      res.json(contact.toJSON())
    })
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

  const body = request.body

  if(body.content === undefined) {
    return res.status(400).json({error: "content missing"})
  }

  const person = new Phonebook({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedContact => {
    res.json(savedContact.toJSON())
  })
})

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`App is now live and running at ${PORT}`)
    console.log('using morgan middle ware')
})
