// const http=require('http')
// http.createServer(function(req,res){
//    res.writeHead(200,{'Content-type':'text/plain'}) 
//    res.end('Hello world')
// }).listen(5000)
// console.log('server running at port 5000')
// const fs=require('fs')

// fs.readFile('input.txt',function(err,data){
// if(err) { console.error(err)}
//     console.log(data.toString())
// })


// // console.log('program embededconst 
// const http=require('http')
// const fs=require('fs')
// const url=require('url')

// let server=http.createServer()
// server.on('request',(req,res)=>{
//     res.writeHead(200)

// const query=url.parse(req.url,true).query
// const name=query.name===undefined ? 'anonyme':query.name;
// fs.readFile('index.html','utf8',(err,data)=>{
//         if(err) throw err;
//         res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
//         data=data.replace('{{name}}',name)
//         res.end(data)
//     })




// res.end('Bonjour '+query.name)


    // fs.readFile('index.html',(err,data)=>{
    //     if(err) throw err;
    //     res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    //     res.end(data)
    // })
   
  
// })
// server.listen(5000)
// const EventEmitter = require('events');
// const monEcouteur=new EventEmitter()
// monEcouteur.on('saute',function(a=0,b=0){
//     console.log("evenement sauté",a,b)
// })
// monEcouteur.emit('saute',10,20)
// monEcouteur.emit('saute')
// monEcouteur.emit('saute')
// monEcouteur.emit('saute')
// const http=require("http")
// const fs=require('fs')
// const EventEmitter=require('events')

// let App={
//     start:function(port){
//         let emitter=new EventEmitter()
//         let server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
//     if(req.url==='/'){
//         emitter.emit('root',res)
//     }
//     res.end()
//         }).listen(port)
// return emitter
//     }
// }

// const app=App.start(5000)
// app.on('root',function(res){
// res.write('je suis à la racine')
// })
exports.hello=function(){
    console.log('dis hello')
}
