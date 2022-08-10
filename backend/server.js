//dependencies
const express = require('express');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();

//connect to database
const URI = process.env.URI;
mongoose.connect(URI);

//express
const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

//user model
var user = require('./models/user');

//routes
var loginRouter = require('./routes/loginRouter');
server.use('/login', loginRouter);






//print to console that server is listening on its given port
var listener = server.listen(process.env.PORT, ()=>{
    console.log('Server listening on port ' + listener.address().port);
})




