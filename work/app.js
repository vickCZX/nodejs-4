const express =require('express');
const app = express();
const nunjucks =require('nunjucks');
const path =require('paht');
const fs =require('fs');



//设置模板
nunjucks.configure('views',{
   express:app
})

//为了能访问到的静态资源的静态服务
app.use(express.static('public'));
app.use(express.static('albums'));

//路径
const pathName =paht.join(__dirname,'albums');



