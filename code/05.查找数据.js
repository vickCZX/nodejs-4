const MongoClient =require('mongodb').MongoClient

const url ='mongodb://localhost:27017/canting'

MongoClient.connect(url, function(err, db){
  const collection =db.collection('xuesheng');

collection.find({}).toArray(function(err,result){
 
  console.log(result[0].name);
})
 db.close()

})