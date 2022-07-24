
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
//const { application } = require('express');
//var cookieParser = require('cookie-parser')
// app.get('/home.css', function(req, res) {
//     res.sendFile(__dirname + "/css/" + "home.css");
//   });
//app.use(cors())
//app.use(express.static(__dirname + '/public'));
// app.get('/home.js', function(req, res) {
//     res.sendFile(__dirname + "/js/" + "home.js")
// })
app.use(bodyParser.urlencoded({ extended: true}))
//const PORT = 2000
//const PORT = `https://ncnapier.github.io/instrumentstatus/`
//tells the server to listen to requests on port 2000
// Add Access Control Allow Origin headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.listen(process.env.PORT, function(){//|| PORT, function(){
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
        const dataInst = db.collection('instruments')
        
        //adds whatever is typed into form to the mongodb 
        app.post('/chat', (req, res) => {
            //const UTCDate = (new Date()).toISOString().split("T")[0];
            dataCollection.insertOne(req.body)
            
            .then(result => {
                res.redirect('https://ncnapier.github.io/instrumentstatus/index.html')
                res.json('quotes')
            })
            
            .catch(error => console.error(error))
        })
        // app.get('https://ncnapier.github.io/instrumentstatus/', (req, res) => {
        //     dataCollection.insertOne(req.body)
        //     db.collection('quotes').find().toArray()
        //     .then(results => {
        //         console.log(results)
                
        //     })
        //     .then(result => {
        //         res.redirect('https://ncnapier.github.io/instrumentstatus/index.html')
        //         res.json('quotes')
        //     })
            
            
        // })
        // app.get('https://ncnapier.github.io/instrumentstatus/index.html', (req, res) => {
        //     db.collection('quotes').find().toArray()
        //     .then(res => {
        //         console.log(res)
                
        //     })
            
        // })
        app.post('/instsend', (req, res) => {
            dataInst.insertOne(req.body)
            .then(result => {
                res.redirect('https://ncnapier.github.io/instrumentstatus/instrument.html')
                res.json('instruments')
            })
        })
        app.get('/api.js', (req, res) => {
            db.collection('instruments').find().toArray()
            .then(results => {
                res.json(results)
            })
        })
        // app.get('https://ncnapier.github.io/instrumentstatus/instrument.html', (req, res) => {
        //     db.collection('instruments').find().toArray()
        //     .then(results => {
        //         res.json(results)
        //     })
        // })
        app.get('/api/chat', (req, res) => {
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
