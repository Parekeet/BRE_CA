var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PropertySchema = new Schema({
  // first_name: String,
  // last_name : String,
  // name      : String,
  // phone     : String,
  address   : String,
  zip       : Number,
  state     : String,
  // units     : Number,
  gross_rent: Number,
  estimation: Number,
  sell_now  : Boolean,
  agent     : Boolean
  // estimation: {
  //   type: Number,
  //   getter: function (value) {
  //     return (((units * gross_rent)*12)*0.65)/0.04;
  //   }
  // }
});

module.exports = mongoose.model('Property', PropertySchema);
