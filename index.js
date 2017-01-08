// index.js

// BASE SETUP
// =============================================================================

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;


// ROUTES FOR OUR API
// =============================================================================

// get an instance of the express Router
var router = express.Router();

// Home route
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// REGISTER ROUTES
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Mission Complete listening on port ' + port);