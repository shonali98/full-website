const express= require("express");
const cors = require ('cors');
const app= express();
const data= require('./data.js');

app.use(cors());
app.get("/api/products",(req,res) => {
    res.send(data.products);
});

app.listen(5001,()=> {
    console.log("serve at http://localhost:5001");

});
