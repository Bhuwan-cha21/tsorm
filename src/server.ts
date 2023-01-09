let express = require('express')
let app = express()
let bodyparser = require('body-parser')
let userRoute = require('./routes/userRoute')
let playerRoute = require('./routes/playerRoute')
let clubRoute = require('./routes/clubRoute')
app.use(bodyparser.json())
app.use('/userapi',userRoute)
app.use('/playerapi',playerRoute)
app.use('/clubapi',clubRoute)

app.listen(3000,() =>{
    console.log('running')
})