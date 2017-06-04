 const MongoClient =require('mongodb').MongoClient;
 
 const url ='mongodb://localhost:27017/canting' 

 MongoClient.connect(url,function(err, db){
   if(err){
     console.log('连接错误'+err.message)} else {
       const collection = db.collection('xuesheng')
       collection.updateMany({'name':'大神1期'},{$set:{'datetime':12}},function(err,result){
        if(!err){
          console.log(result.result)
        }
        db.close();
       })
     }

   
 })