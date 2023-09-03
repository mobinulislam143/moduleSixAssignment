const express = require('express')
const app = express()
const apiRoutes = require('./src/Routes/api')

app.use('/api', apiRoutes);

app.listen(3000, () => {
    console.log("Server is Running!!!")
})