// File System
const fs = require('fs');
if(!fs.existsSync('./docs')){
    console.log('Folder not available');
}
else{
    console.log("Folder already exists");
}
/*fs.mkdir('./docs',(err) => {
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Folder Created");
    }
    
})*/
//console.log("Here Here");
fs.writeFile('./docs/file.txt',"Learn DSA",(err) => {
    if(err){
        console.log("Error occured"+err.message);
    }
    else{
        console.log("File is Written");
    }
    
})
fs.readFile('./docs/file.txt',(err,data) => {
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data.toString());
    }
})
fs.unlink('./docs/file.txt',(err) => {
    console.log("Sample callback");
})
fs.rmdir('./docs',(err) => {
    console.log("Directory Removed");
})
