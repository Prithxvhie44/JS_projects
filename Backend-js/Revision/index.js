const express = require('express');
const path=require('path')

const app=express();
const port=3000;
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    res.render("index")
})



app.listen(3000,function(){
    console.log("Server is running on port 3000");
})
