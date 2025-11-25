    const http = require('http');
    const fs = require('fs');
    const _  = require('lodash');
    const server = http.createServer((req,res) => {
        res.setHeader('Content-Type','text/html');
        console.log(req.url);
        let Path = (path) => {
            fs.readFile(path,(err,data) => {
        if(err){
            console.log(err.message);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    
    });
        }
        if (req.url == '/'){
            Path('./docs/index.html');
        }
        else if(req.url == '/Home'){
            res.statusCode = 301;
            res.setHeader('Location','/');
            res.end();
        }
        else if(req.url == '/About'){
            Path('./docs/about.html');
        }
        else if(req.url == '/Contact'){
            Path('./docs/contact.html');
        }
        else{
            Path('./docs/notfound.html');
            res.statusCode = 404;
        }
        
    })
    server.listen(5000,'localhost', () => {
        console.log("Server Running on the Port 5000");
        console.log(_.random(15,20));
    })


