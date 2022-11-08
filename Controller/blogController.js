const Blog = require('../schema/blogSchema')

const displayBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find()
        res.send(blogs)
       }
       catch (err){
         res.status(404).send(err.message)
       }
}

const editBlog = async (req, res) => {
    const id = req.params.id
    try{
        const newBlog = await Blog.findById(id)
        newBlog.set({
            title : req.body.title,
            author: req.body.author,
            body: req.body.body
        })
        newBlog.save()
        res.send(newBlog)
    }
    catch(err) {
       res.send(err.message)
    }
}

const postBlog = async (req, res) => {
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
        res.send(err.message)
    }
}

const deleteBlog = async (req, res) => {
    id = req.params.id
    try{
        await Blog.findByIdAndDelete(id);
        res.send('deleted')
    }
    catch(err) {
        res.send(err.message)
    }
}

module.exports ={
    deleteBlog,
    editBlog,
    postBlog,
    displayBlogs
}