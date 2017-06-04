const express =require('express');
const app =express();
const MongoClient = require('mongodb').MongoClient;

const url ='mongodb://localhost:27017/canting';
app.get('/v2/xuesheng',function(req,res){
MongoClient.connect(url,function(err,db){
const collection = db.collection('xuesheng');

collection.find({}).toArray(function(err,result){
res.json({'result':result});
})
 db.close()

})

})

app.listen(80)