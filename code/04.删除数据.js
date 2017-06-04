const MongoClient = require('mongodb').MongoClient;

const url ='mongodb://localhost:27017/canting'

MongoClient.connect(url,function(err,db){
  const collection = db.collection('xuesheng');
//删除
collection.deleteMany({'name':'大神3期'},function(err,result){
  console.log(result.result);
})
db.close()
})