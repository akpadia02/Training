// import express from "express";
const express =require("express");
const path=require("path");
const app = express();
const port = 3000


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get('/', (req, res) => {
    res.sendFile("/index.html",{root: __dirname+"/../client"});
})
app.get('/styles.css', (req, res) => {
    res.sendFile("/styles.css",{root: __dirname+"/../client"});
})
app.get('/client.js', (req, res) => {
    res.sendFile("/client.js",{root: __dirname+"/../client"});
})


app.get('/products', (req, res) => {

    var products = [{ id: 1, name: "TV", price: 4000 },
    { id: 2, name: "Laptop", price: 30000 },
    { id: 3, name: "Bottle", price: 4040 },
    { id: 4, name: "Mobile", price: 40500 },
    { id: 5, name: "PC", price: 40090 },
    ];
    res.send(products)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
