'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FamSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the family member'
  },
  parentesco: {
    type:String,
    required: 'Kindly enter the parentesco of the family member'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Fam', FamSchema);