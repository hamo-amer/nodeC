// let app=require('./hello').start(5000)
// app.on('root',function(res){
// res.write('je suis à la racine')
// })
const express=require('express')
const hello=require('./main').hello
console.log(hello)
const app=express()

app.get('/',(req,res)=>{
    res.send('je suis à la racine')
})
app.get('/demo',(req,res)=>{
    res.send('je suis en demo page')
    console.log("demo dit salut")
})
app.get('/hello',(req,res)=>{
    res.send('say hello')
    hello()
}) 
app.listen(5000)
