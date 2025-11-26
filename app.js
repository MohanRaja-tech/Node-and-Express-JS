const express = require('express');
const app = express();

app.listen(3000,() => {
    console.log("Server running on the Port 3000");
});

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
    res.sendFile('./docs/notfound.html',{root : __dirname});
})