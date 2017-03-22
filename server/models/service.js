let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')
const ImageSchema = require('./image').schema

let ServiceSchema = new Schema({
  title: {type: String},
  slug: {type: String, unique: true},
  description: {type: String},
  cover: {type: ImageSchema},
  content: {type: String},
  createAt: {type: Date, default: Date.now}
}, { collection: 'service'});

ServiceSchema.plugin(autoIncrement.plugin, 'Service')

let Service = mongoose.model('Service', ServiceSchema)

module.exports = Service
