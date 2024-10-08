const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-in-sync.txt',
            `\nHere is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                //console.log(result)
            console.log('This task is done')
            }
        )
    })
})

console.log('Starting the next one')