const fs = require("fs");
const path = require("path");
const express = require ('express');
const PORT = process.env.PORT || 3001;
const app = express();
//to serve js and css files 
app.use(express.static('public'));
//parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const {animals} = require('./data/animals.json')

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, ()=>{
    console.log(`API server is on port ${PORT}`)
});

