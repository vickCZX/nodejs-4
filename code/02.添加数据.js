const MongoClient =require('mongodb').MongoClient;

//数据库地址
const url = 'mongodb://localhost:27017/canting'

MongoClient.connect(url,function(err,db){
  if(!err){
    //操作数据库是集合里插入数据
    const collection =db.collection('xuesheng');
    //插入数据
    // collection.insertOne({'name':'大神4期'},function(err,result){
    //   if(!err){
    // //     console.log(result);
    //    }
    //    db.close();
    // })
    collection.insertMany([{'name':'大神4期'},{'name':'大神1期'},{'name':'大神3期'},{'name':'大神2期'}],
    
     function(err,result){
     if(!err){
       console.log(result.result);
     }
     db.close()
    })
  }
})
