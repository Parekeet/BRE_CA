var Property = require('../model/property');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');


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
    // newProperty.save(function(err) {
    //   if(err)
    //     console.log(err);
    //   else res.send('Hey, a property has successfully been created!');
    // })

    newProperty.save()
          .then(function(newProperty) {
            // send email to user
            // communicate order to e24

      ////////////////////////////////////////////////
              var sendMailTo = function(req, res, next){
                var transporter = nodemailer.createTransport({
                  service: 'Gmail',
                  auth: {
                    user: 'mintthaiservice@gmail.com',
                    pass: 'scoobymint1'
                  }
                });

                var mailOptions = {
                  from: 'Pare <parekeet@gmail.com>',
                  to:   'mintthaiservice@gmail.com',
                  subject: 'Order Submission',
                  text: 'You have an order with the following details... Order: ' + newProperty,
                  html: '<p>You have an order with the following details...</p>' + newProperty
                };

                transporter.sendMail(mailOptions, function(error, info){
                  if(error){
                    console.log(error);
                  } else {
                    console.log("Message Sent: " +info.response);
                  }
                })
              };
            res.json(newProperty);
            sendMailTo();
          })
          .catch(function(err) {
            if (err.message.match(/E11000/)) {
              err.status = 409;
            } else {
              err.status = 422;
            }
            next(err);
          });
  // },

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
