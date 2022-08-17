const ex=require('express');
const bp=require('body-parser');


const app=ex();
app.use(bp.urlencoded({extended:true}))
app.get("/style.css",function(req,res){
    res.sendFile(__dirname+"/style.css")
    
   
     });


 app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html")

 });

 app.post("/",function(req,res){

    var num1 = Number(req.body.n1)
    var num2= Number(req.body.n2)
    var result1=num1+num2
res.send("Result =  "+result1)

 })
