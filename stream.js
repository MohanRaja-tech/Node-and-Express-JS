const fs = require('fs');
const readstream = fs.createReadStream('./docs/HugeFile.txt',{encoding : 'utf8'});
if(fs.existsSync('./docs/HugeFile.txt')){
   readstream.on('data',(buffer) => {
    console.log("\n New Buffer \n");
    console.log(buffer.toString());
}) 
}
else{
    console.log("File Not Found");
}
/*const writestream  = fs.createWriteStream('./docs/copyfile.txt');
readstream.on('data',(buffer) => {
    writestream.write(buffer.toString());
})*/

// Direct Method to Copy Files
readstream.pipe(writestream);
   
