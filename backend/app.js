 /* Assignment: twitter clone
Author: Darpan Saini 
Date: [28-4-2024] 
Description: This node.js document is part of the backend problem no 5 . 
Each section is structured according to the design specifications.

note **************this is clint side code where get post and delete operation is done *****************
*********befor running this project please make sure to install require pakeges react-bootstrap, node module,and other things *******************
**********************************download raect bootstrap otherwise navbar stop working****************
*/

 
 const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'});
const bodyParser = require("body-parser");
const cors = require('cors')
const errorMiddleware = require('./middleware/error')

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads/image', express.static('uploads/image'));
app.use('/uploads/profilePictures', express.static('uploads/profilePictures'));


// route imports
const user = require('./routes/userRoute');
const tweet = require('./routes/tweetRoute');

app.use('/api/v1',user)
app.use('/api/v1',tweet)


// middleware for errors
app.use(errorMiddleware)

module.exports = app;