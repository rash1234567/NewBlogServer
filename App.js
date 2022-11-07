const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://rasheedah:rasheedah@cluster0.meymeqt.mongodb.net/?retryWrites=true&w=majority').then(()=> {
    console.log('connected to mongodb')
}).catch(error => console.log('Could not connect', error));

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    body: String,
})

const Blog = mongoose.model('Blog',blogSchema);

app.get('/allBlogs', async (req, res) => {
    try{
     const blogs = await new Blog.find()
     res.send(blogs)
    }
    catch (err){
      res.status(404).send(err)
    }
});

app.post('/blog', async (req, res) => {
    let blog = new Blog({
        title : req.body.title,
        author: req.body.author,
        body: req.body.body
     })

    try{
        await blog.save()
        res.send(blog)
    }
    catch (err) {
        res.send(err)
    }
})

app.put('/blog/:id/edit', async(req, res) => {
    const id = req.params.body
    try{
        const newBlog = await new Blog.findById(id)
        newBlog.
        newBlog.save()
        res.send(newBlog)
    }
    catch(err) {
       res.send(err)
    }
})


app.listen(5000, () => {
    console.log('listening')
})