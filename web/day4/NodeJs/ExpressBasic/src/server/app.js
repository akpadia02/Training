// import express from "express";
const express = require("express");
const path = require("path");
const app = express();
const port = 3000


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//     res.sendFile("/index.html",{root: __dirname+"/../client"});
// })
// app.get('/styles.css', (req, res) => {
//     res.sendFile("/styles.css",{root: __dirname+"/../client"});
// })
// app.get('/client.js', (req, res) => {
//     res.sendFile("/client.js",{root: __dirname+"/../client"});
// })


app.use(express.static('../client'));
// app.use(express.static(path.join(__dirname, '../client')));
//middleware->extra functionality on top of default function


//get post delete
app.use(express.json()); //express.json to parse json req body

var products = [{ id: 1, name: "TV", price: 4000 },
{ id: 2, name: "Laptop", price: 30000 },
{ id: 3, name: "Bottle", price: 4040 },
{ id: 4, name: "Mobile", price: 40500 },
{ id: 5, name: "PC", price: 40090 },
];


app.post('/newProduct', (req, res) => {
    const payload=req.body;
    console.log(payload);
    products.push(payload);
    res.send("Product added successfully!");
})

app.delete('/deleteProduct/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        res.send(`Product with id ${id} deleted.`);
    } else {
        res.status(404).send(`Product with id ${id} not found.`);
    }
});


app.get('/products', (req, res) => {
    res.send(products)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
