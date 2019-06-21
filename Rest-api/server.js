const express = require("express");
const assert = require("assert");
const cors=require('cors')
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());
// mongodb://localhost:27017

const MongoURL = "mongodb://localhost:27017";
const dbName='MongoUrl'
MongoClient.connect(MongoURL, (err, client) => {
  assert.equal(err, null, "connection failed");
  console.log("success of connection between db and server");
  var db = client.db(dbName);


app.get("/",(req,res)=>{
res.send("welcome to friends API")
})
//DELETE USER 
app.delete('/users/:id',(req,res)=>{
  let UserToRemoveID=ObjectID(req.params.id)
  db.collection('users').findOneAndDelete(
  {_id:UserToRemoveID},(err,data)=>{
    if(err) {res.status(400).send('cant delete user')}
    else{res.send('user was deleted')}
  }
  )
})


//MODIFY USER 
app.put("/users/:id",(req,res)=>{
  let id=ObjectID(req.params.id)
  let modifieProduct=req.body
  db.collection('users').findOneAndUpdate({_id:id},{$set:{...modifieProduct}},(err,data)=>{
    if(err) {res.status(400).send('cant modify user')}
    else{res.send('user was modified')} 
  })
})


// ADD USER
app.post("/users",(req,res)=>{
  const {body} =req;
  db.collection('users').insertOne(body,(err,data)=>{
    if(err){
      res.status(400).send('failed to insert')
    }
    else{
      res.send(body)
    }
  })
})

// ADD Product
app.post("/product",(req,res)=>{
  const {body} =req;
  db.collection('product').insertOne(body,(err,data)=>{
    if(err){
      res.status(400).send('failed to insert')
    }
    else{
      res.send(body)
    }
  })
})



// GET ALL USERS
app.get("/users",(req,res)=>{
  db.collection('users').find().toArray((err,data)=>{
    if(err){
      res.status(404).send('could not fetch data')

    }
    else{res.send(data)}
  })
})


// GET ALL Products
app.get("/product",(req,res)=>{
  db.collection('product').find().toArray((err,data)=>{
    if(err){
      res.status(404).send('could not fetch data')

    }
    else{res.send(data)}
  })
})

});


app.listen(4000, () => {
  console.log("server is listen on port 4000");
});
