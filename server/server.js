const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const MongoClient = require("mongodb").MongoClient



const app = express();
app.use(express.json())

app.use(Cors())


// DB Config
const dblink = 'mongodb+srv://user_menu:123456789a@cluster0.7cvip2n.mongodb.net/?retryWrites=true&w=majority'
  
var database

app.get('/', (req,res) => {
  database.collection('Shop-details').find({}).toArray((err, result) => {
    if(err) throw err
    res.send(result)
  })
})

const port = process.env.PORT || 5000;

app.listen(port, () => (
  MongoClient.connect(dblink,
    { useNewUrlParser: true }, (error, result) => {
      if(error) throw error
      database = result.db('shop')
      console.log("MongoDB successfully connected") 
    }
  )
))
console.log(`Server up and running on port ${port}!`)