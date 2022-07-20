console.log('node test')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: true}))

const PORT = `https://ncnapier.github.io/instrumentstatus/`
//tells the server to listen to requests on port 8000
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`)
})
//sends index.html when localhost:8000/ is requested by the browser
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


const MongoClient = require('mongodb').MongoClient
MongoClient.connect(`mongodb+srv://nattydevs:%2321Reipan@cluster0.u4c49.mongodb.net/?retryWrites=true&w=majority`, { useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('new-database')
        const dataCollection = db.collection('quotes')
        
        //adds whatever is typed into form to the mongodb 
        app.post('/quotes', (req, res) => {
            dataCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(error => console.error(error))
        })
        app.get('/', (req, res) => {
            db.collection('quotes').find().toArray()
              .then(results => {
                console.log(results)
              })
              .catch(error => console.error(error))
            // ...
          })
    })
  