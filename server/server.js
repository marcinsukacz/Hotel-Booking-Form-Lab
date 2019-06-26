const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
const db = client.db('hotel');
const guestsCollection = db.collection('guests');
const guestsRouter = createRouter(guestsCollection);
app.use('/api/guests', guestsRouter);
})
.catch(console.error);

app.get('/', function(req, res) {
  res.send("Bye World!!")
})
app.listen(3000, function() {
  console.log('App running on port 3000');
})
