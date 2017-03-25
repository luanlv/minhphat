let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')
const ImageSchema = require('./image').schema

let ProductSchema = new Schema({
  title: {type: String},
  slug: {type: String, unique: true},
  description: {type: String},
  cover: {type: ImageSchema},
  content: {type: String},
  lang: {type: String, default: 'vi'},
  createAt: {type: Date, default: Date.now}
}, { collection: 'product'});

ProductSchema.plugin(autoIncrement.plugin, 'Product')

let Product = mongoose.model('Product', ProductSchema)

module.exports = Product
