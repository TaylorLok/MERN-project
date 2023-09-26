require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
    console.log('middleware applied')
});

app.use('/api/workouts', workoutRoutes)

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //only listen to requests when connected to db
    app.listen(process.env.PORT, () => {
        console.log('connecting to the DB & listening on port', process.env.PORT)
    });
    console.log('connected to db')
})
.catch((error) => {
    console.log(error)
});

//listen for requests
// app.listen(process.env.PORT, () => {
//     console.log('listening on port', process.env.PORT)
// });

