var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user_menu:123456789a@cluster0.7cvip2n.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("shop");
  var myobj = [
    { name: 'Tasty bite', address: 'near bh1', contact:'1234567', },
    { name: 'Peters hut', address: 'near gh4', contact:'1234567'},
    { name: 'Fun food', address: 'near gh4', contact:'1234567'},
    { name: 'Rice and men', address: 'University Mall', contact:'1234567'},
    { name: 'Sun of bun', address: 'University Mall', contact:'123'},
    { name: 'Sandys pizza', address: 'bh2', contact:'1234567'},
   
  ];
  dbo.collection("Shop-details").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});