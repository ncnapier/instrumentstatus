console.log('node test')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const { application } = require('express');
var cookieParser = require('cookie-parser')
// app.get('/home.css', function(req, res) {
//     res.sendFile(__dirname + "/css/" + "home.css");
//   });
app.use(cors())
app.use(express.static(__dirname + '/public'));
app.get('/home.js', function(req, res) {
    res.sendFile(__dirname + "/js/" + "home.js")
})
app.use(bodyParser.urlencoded({ extended: true}))
const PORT = 2000
//const PORT = `https://ncnapier.github.io/instrumentstatus/`
//tells the server to listen to requests on port 2000
app.listen(process.env.PORT || PORT, function(){
    console.log(`listening on port ${PORT}`)
})
//sends index.html when localhost:8000/ is requested by the browser
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })


const MongoClient = require('mongodb').MongoClient
MongoClient.connect(`mongodb+srv://nattydevs:%2321Reipan@cluster0.u4c49.mongodb.net/?retryWrites=true&w=majority`, { useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('new-database')
        const dataCollection = db.collection('quotes')
        
        //adds whatever is typed into form to the mongodb 
        app.post('/chat', (req, res) => {
            //const UTCDate = (new Date()).toISOString().split("T")[0];
            dataCollection.insertOne(req.body)
            
            .then(result => {
                res.redirect('/')
                res.json('quotes')
            })
            
            .catch(error => console.error(error))
        })
        app.get('/chat', (req, res) => {
            db.collection('quotes').find().toArray()
            .then(results => {
                console.log(results)
                
            })
            
        })
        app.get('/', (req, res) => {
            db.collection('quotes').find().toArray()
              .then(results => {
                console.log(results)
                res.json(results)
                
                //res.render('index.ejs', {quotes: results})
                //res.sendFile(__dirname + '/index.html')
                
              })
              .catch(error => console.error(error))
            // ...
          })
        })