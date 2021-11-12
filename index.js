const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(routes);

app.get('/health', (req,res)=>{
    res.json({"status":"running"});
})

app.listen(8080, ()=>{
    console.log("server running");
})