//load all variables from .env file
require("dotenv").config();

//initialize and connect MongoDB using mongoose
require('./database/DB');

//store Express.js reference to a constant varaible
const express = require('express');

//fixes cors issues
const cors = require('cors');

//include Products routes
const productsRoutes = require('./routes/Products');

//include custom error handler 
const errorHandler = require('./middleware/ErrorHandler');

//initialize the Express.js instance
const app = express();

//middleware to parse incoming JSON data payload in HTTP request  
app.use(express.json());

//middleware to enable CORS support
app.use(cors());

//middleware for products routes
app.use("/products", productsRoutes);

//middleware for custom error handler
app.use(errorHandler);

//http server
app.listen(process.env.HTTP_SERVER_PORT, () => {
    console.log("Http Server running on port: ", process.env.HTTP_SERVER_PORT);
});