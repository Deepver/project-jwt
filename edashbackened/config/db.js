const mongoose = require('mongoose')
 //connect to database
 mongoose.connect('mongodb://localhost:27017/test')
 .then(() => { console.log('connect success db'); });
 