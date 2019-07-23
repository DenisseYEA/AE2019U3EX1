const mongoose = require('mongoose');

let fanpageSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    type: String,
    required: true
  },
  keywords: [{
      type: String,
  }],
  coments: [{
      type: String,
  }],
  calif: [{
      type: Number,
  }]
});

const fanpageModel = mongoose.model('Fanpage', fanpageSchema, 'fanpages');

module.exports = fanpageModel;