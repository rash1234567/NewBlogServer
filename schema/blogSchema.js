const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    body: String,
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog
