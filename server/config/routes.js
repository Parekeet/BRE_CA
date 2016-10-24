var express        = require('express');
var router         = express.Router();
var bodyParser     = require('body-parser');
//Can use regular functions instead of .post, .get, .whatever
//Also overrides CORS (cross origin requests)
var methodOverride = require('method-override');
var propertiesCtrl = require('../controllers/propertiesCtrl.js');

router.route('/properties').post(propertiesCtrl.create);
router.route('/properties').get(propertiesCtrl.show);
router.route('/properties/:id').get(propertiesCtrl.showOne);
router.route('/properties/:id/edit').put(propertiesCtrl.edit);
router.route('/properties/:id').delete(propertiesCtrl.delete);

module.exports = router;


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

  // GET BY ID
  // .get(function(req, res) {
  //   MONGO USES KEY:VALUE PAIRING
  //   WE ARE USING {} BECAUSE IT IS AN OBJECT
  //   WE USE BODY WHEN WE SEND INFO (POST)
  //   WE USE PARAMS WHEN WE ARE GRABBING SOMETHING FROM THE URL
  //   Property.findById({_id: req.params.property_id}, function(err, property){
  //     if (err)
  //       res.send(err);
  //     res.json(property);
  //   });
  // });

///////////////////////////////////////////////////////////
