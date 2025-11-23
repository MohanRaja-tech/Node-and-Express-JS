    const http = require('http');
    const fs = require('fs');

    const server = http.createServer((req,res) => {
        res.setHeader('Content-Type','text/html');
        fs.readFile('./docs/index.html',(err,data) => {
        if(err){
            console.log(err.message);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    
    });
    })
    server.listen(5000,'localhost', () => {
        console.log("Server Running on the Port 5000");
    })


