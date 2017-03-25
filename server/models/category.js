let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')

let CategorySchema = new Schema({
  title: {type: String},
  slug: {type: String, unique: true},
  lang: {type: String, default: 'vi'},
  createAt: {type: Date, default: Date.now}
}, { collection: 'category'});

CategorySchema.plugin(autoIncrement.plugin, 'Category')

let Category = mongoose.model('Category', CategorySchema)

module.exports = Category
