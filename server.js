// Loading our dependencies
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

// Configure app to use bodyParser()
// Allows us to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

//Connecting to our DB
mongoose.connect('mongodb://localhost/bre_properties');

//Assigning a port to use
var port     = process.env.PORT || 8080;

//Get an instance of the express router
// var router   = express.Router();

//Middleware is used to process requests
// router.use(function(req, res, next) {
//   console.log('Something is a-happenin');
//   next(); //Moves it to other routes, otherwise it stops here
// })

//Used to test if everything is working
app.get('/', function(req, res) {
  res.json('Hi! Your API is working!');
})

//THESE ARE THE ROUTES
var routes = require('./server/config/routes.js');

//Register routes here
app.use('/api', routes);



//Start server
app.listen(process.env.PORT || 8080, function() {
  console.log("Express is running on Port 8080")
});

//Adding schema
var Property = require('./server/model/property');

//CORS headers for node/express
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type: text/html');
    next();
}

app.use(allowCrossDomain);

///////////////////////////////////////////////////////////
//                     R O U T E S                       //
///////////////////////////////////////////////////////////
// router.route('/properties')

  //POST
  // .post(function(req, res) {
  //   var property  = new Property(); //Creates new instance of property model
  //   property.name = req.body.name;  //Sets the property name
  //   //save the property and checks for errors
  //   property.save(function(err) {
  //     if (err)
  //       res.send(err);
  //     res.json('Property has been created!');
  //   });
  // })

  //GET all properties
  // .get(function(req, res) {
  //   Property.find(function(err, properties) {
  //     if(err)
  //       res.send(err);
  //     res.json(properties);
  //   });
  // });

// router.route('/properties/:property_id')

  //GET BY ID
  // .get(function(req, res) {
    //MONGO USES KEY:VALUE PAIRING
    //WE ARE USING {} BECAUSE IT IS AN OBJECT
    //WE USE BODY WHEN WE SEND INFO (POST)
    //WE USE PARAMS WHEN WE ARE GRABBING SOMETHING FROM THE URL
  //   Property.findById({_id: req.params.property_id}, function(err, property){
  //     if (err)
  //       res.send(err);
  //     res.json(property);
  //   });
  // });

///////////////////////////////////////////////////////////

