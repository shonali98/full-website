const express= require("express");
const app= express();
const data= require('./data.js');

app.get("/api/products",(req,res) => {
    res.send(data.products);
});

app.listen(5001,()=> {
    console.log("serve at http://localhost:5001");

});
