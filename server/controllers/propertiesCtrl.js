var Property = require('../model/property');
var mongoose = require('mongoose');

module.exports = {

  //CREATE : POST
  create: function(req, res, next){
    //Invoking model to make new property
    var newProperty = new Property();
    //Grabbing all the keys from the POST request
    var keys = Object.keys(req.body);
    //Saving all the keys as an object
    keys.forEach(function(key) {
      newProperty[key] = req.body[key];
    });
    newProperty.save(function(err) {
      if(err)
        console.log(err);
      else res.send('Hey, a property has successfully been created!');
    })
  },

  //FIND ALL : GET
  show: function(req, res, next) {
    Property.find({}, function(err, properties) {
      if (err) console.log(err);
      res.json(properties);
    })
  },

  //SHOW ONE : GET BY ID
  //MONGO USES KEY:VALUE PAIRING
  //WE ARE USING {} BECAUSE IT IS AN OBJECT
  //WE USE BODY WHEN WE SEND INFO (POST)
  //WE USE PARAMS WHEN WE ARE GRABBING SOMETHING FROM THE URL
  showOne: function(req, res, next) {
    Property.findById({_id: req.params.id}, function(err, property){
      if (err) console.log(err);
      res.json(property);
    })
  },

  //EDIT : PUT/UPDATE
  //Because all objects already have key:value pair that you're grabbing from Get By Id,
  //This is how it knows which key:value pair to edit
  edit: function(req, res, next) {
    Property.findById({_id: req.params.id}, function(err, property) {
      var keys = Object.keys(req.body);
      keys.forEach(function(key) {
        property[key] = req.body[key];
      });
      property.save();
      if (err) console.log(err);
    });
    res.send('Hey, you updated the property. Props!');
  },

  //DELETE
  delete: function(req, res, next){
    Property.findOneAndRemove({_id: req.params.id}, function(err, property){
      if (err) res.json('YOU DIDNT DELETE ANYTHING YA DINGUS!');
      else res.json('YOU DELETED IT YA DINGUS. CONGRATS!');
    });
  }

}
