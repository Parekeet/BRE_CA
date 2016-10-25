var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PropertySchema = new Schema({
  email     : String,
  phone     : String,
  address1   : String,
  address2   : String,
  // address   : String,
  // zip_code  : Number,
  // city      : String,
  // state     : String,
  gross_rent: Number,
  estimation: Number,
  cash_price: Number,
  sell_now  : Boolean,
  agent     : Boolean
});

module.exports = mongoose.model('Property', PropertySchema);
