let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')
const ImageSchema = require('./image').schema

let PostSchema = new Schema({
  title: {type: String},
  slug: {type: String, unique: true},
  description: {type: String},
  cover: {type: ImageSchema},
  content: {type: String},
  view: {type: Number, default: 0},
  category: [Number],
  tags:[Schema.Types.Mixed],
  lang: {type: String, default: 'vi'},
  createAt: {type: Date, default: Date.now}
}, { collection: 'post'});

PostSchema.plugin(autoIncrement.plugin, 'Post')

let Post = mongoose.model('Post', PostSchema)

module.exports = Post
