//Modules
const express = require('express')
const mongoose = require('mongoose')
const addressRoutes = require('./routes/contacts')
require("dotenv").config()

//Initialize app
const app = express()

//Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use("/api/contacts", addressRoutes)

//Connect to database and listen for requests
mongoose.connect(process.env.dbURI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening")
        })
    })
    .catch(error => console.log(error))