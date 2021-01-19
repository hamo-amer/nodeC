// const fs=require('fs')
// fs.readFile('demo.mp4',(err,data)=>{
//     if(err) throw err
//     fs.writeFile('copy.mp4',data,(err)=>{
//         if(err) throw err
//         console.log('le fichier à bien été copié')
//     })
// })
const fs=require('fs')
let file='demo.mp4'

fs.stat(file,(err,stat)=>{
    let total=stat.size
    let progress=0
    const read=fs.createReadStream(file)
read.on('data',(chunk)=>{
    progress+=chunk.length
console.log("j'ai lu "+Math.round(progress*100/total)+"%")
})
read.on('end',()=>{
    console.log("j'ai terminé le copié")
})
})
