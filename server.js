
//----------imports--------------------------------------------------
const express = require("express");
const path = require('path');
const app = express();
var bodyParser = require('body-parser');


app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/static")));

app.set('views',path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//----------routes--------------------------------------------------
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

//----------running on localhost--------------------------------------------------
app.listen(8000, () => console.log("listening on port 8000"));

// Comment to test git commit and merge


