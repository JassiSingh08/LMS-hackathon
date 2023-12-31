const connectToMongo = require("./db");
const express = require("express");
const cors = require('cors')

connectToMongo();

const app = express();
app.use(express.json())
app.use(cors())

// Available Routes
app.use('/api/auth', require("./Routes/auth"))
app.use('/api/Projects', require("./Routes/Projects"))
app.use('/api/quizes', require("./Routes/Quizes"))

/* app.get('/', (req, res) => {
    res.send("Hello World");
    // res.end();
})
 */
 
app.listen(5000, ()=> {
    console.log(`LMS Backend - Yes I am listening `)
})
