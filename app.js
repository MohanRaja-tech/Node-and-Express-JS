const express = require('express');
const app = express();
const morgan = require('morgan');   

app.listen(3000,() => {
    console.log("Server running on the Port 3000");
});
app.use(morgan('dev'));
app.use((req,res,next) => {
    console.log("Middleware 1");
    next();
});
app.use((req,res,next) => {
    console.log("Middleware 2");
    next();
})
app.get('/',(req,res) => {
    //res.status(200).send('<h1>Hello welcome to the WebPage</h1>');
    res.sendFile('./docs/index.html',{root : __dirname});
})
app.get('/about',(req,res) => {
    res.sendFile('./docs/about.html',{root : __dirname});
})
app.get('/main',(req,res) => {
    res.redirect('/about');
})
app.use((req,res) => {
    res.status(404).sendFile('./docs/notfound.html',{root : __dirname});
})
