const http=require("http")
const fs=require('fs')
const EventEmitter=require('events')

let App={
    start:function(port){
        let emitter=new EventEmitter()
        let server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    if(req.url==='/'){
        emitter.emit('root',res)
    }
    res.end()
        }).listen(port)
return emitter
    }
}

module.exports=App
